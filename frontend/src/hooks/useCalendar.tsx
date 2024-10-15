import React from "react";
import { createDate } from "../utils/helpers/date/createDate";
import { getWeekDaysNames } from "../utils/helpers/date/getWeekDaysNames";
import {
  createMonth,
  getMonthNumberOfDays,
} from "../utils/helpers/date/createMonth";

interface IUseCalendar {
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

const getYaersInterval = (year: number): number[] => {
  const startYear = Math.floor(year / 10) * 10;
  return [...Array(10)].map((_, index) => startYear + index);
};

export const useCalendar = ({
  locale = "default",
  date,
  firstWeekDay,
}: IUseCalendar) => {
  const [mode, setMode] = React.useState<"days" | "monthes" | "years">("days");
  const [selectedDate, setSelecteDay] = React.useState(createDate({ date }));
  const [selectedMonth, setSelectedMonth] = React.useState(
    createMonth({
      date: new Date(selectedDate.year, selectedDate.monthIndex),
      locale,
    }),
  );
  const [selectedYearInterval, setSelectedYearInterval] = React.useState(
    getYaersInterval(selectedDate.year),
  );
  //Удалили selectedYear тут

  const monthesNames = React.useMemo(() => getMonthNames(locale), []);
  const weekDaysNames = React.useMemo(
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

    const numberOfNextDays =
      7 - lastDay.dayNumberInWeek + shiftIndex > 6
        ? 7 - lastDay.dayNumberInWeek - (7 - shiftIndex)
        : 7 - lastDay.dayNumberInWeek + shiftIndex;

    const totalCalendarDays = days.length + numberOfPrevDays + numberOfNextDays;

    const result = [];

    for (let i = 0; i < numberOfPrevDays; i += 1) {
      const inverted = numberOfPrevDays - i;
      result[i] = prevMonthDays[prevMonthDays.length - inverted];
    }

    for (
      let i = numberOfPrevDays;
      i < totalCalendarDays - numberOfNextDays;
      i += 1
    ) {
      result[i] = days[i - numberOfPrevDays];
    }

    for (
      let i = totalCalendarDays - numberOfNextDays;
      i < totalCalendarDays - 1;
      i += 1
    ) {
      result[i] = days[i - totalCalendarDays + numberOfNextDays];
    }
    return result;
  }, [selectedMonth.year, selectedMonth.monthIndex, selectedDate]);

  return {
    state: {
      mode,
      calendarDays,
      weekDaysNames,
      monthesNames,
      selectedDate,
      selectedMonth,
      selectedYearInterval,
    },
    functions: {
      setMode,
    },
  };
};
