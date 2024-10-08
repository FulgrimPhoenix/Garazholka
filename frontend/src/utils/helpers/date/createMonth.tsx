import { createDate } from "./createDate";

interface CreateMonthParams {
  locale?: string;
  date?: Date;
}

export const getMonthNumberOfDays = (
  monthIndex: number,
  yearNumber = new Date().getFullYear()
): number => {
  return new Date(yearNumber, monthIndex, 0).getDate();
};

export const createMonth = (params?: CreateMonthParams) => {
  const date = params?.date ?? new Date();
  const locale = params?.locale ?? "default";

  const d = createDate({ date, locale });
  const { month: monthName, year, monthNumber, monthIndex } = d;
  const getDay = (dayNumber: number) => {
    return createDate({ date: new Date(year, monthIndex, dayNumber), locale });
  };
  const createMonthDays = () => {
    const days = [];
    for (let i = 0; i < getMonthNumberOfDays(monthIndex + 1, year); i++) {
      days[i] = getDay(i + 1);      
    }
    return days;
  };
  return {
    getDay,
    monthName,
    monthIndex,
    monthNumber,
    year,
    createMonthDays,
  };
};
