import React from "react";
import { createDate } from "../utils/helpers/date/createDate";
import { getWeekDaysNames } from "../utils/helpers/date/getWeekDaysNames";
import {
  createMonth,
  getMonthNumberOfDays,
} from "../utils/helpers/date/createMonth";

interface TUseCalendaarParams {
  firstWeekDay?: number;
  locale?: string;
  date: Date;
}

const getMonthNames = (locale: string = "default") => {
  const monthesNames: {
    month: ReturnType<typeof createDate>["month"];
    monthShort: ReturnType<typeof createDate>["monthShort"];
    monthIndex: ReturnType<typeof createDate>["monthIndex"];
    date: ReturnType<typeof createDate>["date"];
  }[] = Array.from({ length: 12 });

  const d = new Date();

  monthesNames.forEach((_, i) => {
    const { month, monthShort, monthIndex, date } = createDate({
      locale,
      date: new Date(d.getFullYear(), d.getMonth() + i, d.getDate()),
    });

    monthesNames[monthIndex] = { month, monthShort, monthIndex, date };
  });
  return monthesNames;
};

export const useCalendar = ({
  locale = "default",
  date,
  firstWeekDay,
}: TUseCalendaarParams) => {
  const [mode, setMode] = React.useState<"days" | "monthes" | "years">("days");
  const [selectedDate, setSelecteDay] = React.useState(createDate({ date }));
  const [selectedMonth, setSelectedMonth] = React.useState(
    createMonth({
      date: new Date(selectedDate.year, selectedDate.monthIndex),
      locale,
    }),
  );
  //Удалили selectedYear тут

  const monthesNames = React.useMemo(() => getMonthNames(locale), []);
  const weekDaysName = React.useMemo(
    () => getWeekDaysNames({ firstWeekDay, locale }),
    [],
  );

  const days = React.useMemo(
    () => selectedMonth.createMonthDays(),
    [selectedDate, selectedMonth],
  );

  const calendarDays = React.useMemo(() => {
    const monthNumberOfDays = getMonthNumberOfDays(
      selectedDate.monthNumber,
      selectedDate.year,
    );
    const prevMonthDays = createMonth({
      date: new Date(selectedDate.year, selectedMonth.monthIndex - 1),
      locale,
    }).createMonthDays();
    const nextMonthDays = createMonth({
      date: new Date(selectedDate.year, selectedMonth.monthIndex + 1),
      locale,
    }).createMonthDays();

    const firstDay = days[0];
    const lastDay = days[monthNumberOfDays - 1];

    const shiftIndex = (firstWeekDay || 1) - 1; //костыль от undefinded

    const numberOfPrevDays =
      firstDay.dayNumberInWeek - shiftIndex < 0
        ? 7 - ((firstWeekDay || 1) - firstDay.dayNumberInWeek) // костыль от undefinded
        : firstDay.dayNumberInWeek - shiftIndex;

    console.log("numberOfPrevDays", numberOfPrevDays);

    const numbgrOfNextDays =
      7 - lastDay.dayNumberInWeek + shiftIndex > 6
        ? 7 - lastDay.dayNumberInWeek - (7 - shiftIndex)
        : 7 - lastDay.dayNumberInWeek + shiftIndex;
  }, [selectedMonth.year, selectedMonth.monthIndex, selectedDate]);

  return { monthesNames };
};
