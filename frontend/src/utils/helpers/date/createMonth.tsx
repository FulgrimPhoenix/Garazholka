import { createDate, IFullDateData } from "./createDate";

export interface IcreateMonthReturnedData {
  getDay: (dayNumber: number) => IFullDateData;
  monthName: string;
  monthIndex: number;
  monthNumber: number;
  year: number;
  createMonthDays: () => IFullDateData[];
}

interface IcreateMonth {
  (params: { locale?: string; date?: Date }): IcreateMonthReturnedData;
}

interface IgetMonthNumberOfDays {
  (monthIndex: number, yearNumber: number): number;
}

export const getMonthNumberOfDays: IgetMonthNumberOfDays = (
  monthIndex,
  yearNumber,
) => {
  return new Date(yearNumber, monthIndex, 0).getDate();
};

export const createMonth: IcreateMonth = (params) => {
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
