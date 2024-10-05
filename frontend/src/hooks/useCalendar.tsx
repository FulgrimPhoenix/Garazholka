import React from "react";
import { createDate } from "../utils/helpers/date/createDate";

interface TuseCalendaarParams {
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
    const {month, monthShort, monthIndex, date} = createDate({ locale, date: new Date(d.getFullYear(), d.getMonth() + i, d.getDate()) });

    monthesNames[monthIndex] = {month, monthShort, monthIndex, date}
  });
  return monthesNames
};

export const useCalendar = ({ locale = "default", date }: TuseCalendaarParams) => {
  const [mode, setMode] = React.useState<"days" | "monthes" | "years">("days");
  const [selectedDay, setSelecteDay] = React.useState(createDate({ date }));
  const [selectedMonth, setSelectedMonth] = React.useState(
    createDate({
      date: new Date(selectedDay.year, selectedDay.monthIndex),
      locale,
    })
  );
  const [selectedYear, setSelectedYear] = React.useState(
    createDate({ date: new Date(selectedDay.year), locale })
  );

  const monthesNames = React.useMemo(() => getMonthNames(locale), []);  

  return {monthesNames};
};
