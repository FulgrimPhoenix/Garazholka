import { getWeekNumber } from "./getWeekNumber";
export interface IFullDateData {
  date: Date;
  dayNumber: number;
  day: string;
  dayNumberInWeek: number;
  dayShort: string;
  year: number;
  yearShort: string;
  month: string;
  monthShort: string;
  monthNumber: number;
  monthIndex: number;
  timestamp: number;
  week: number;
}
export interface ICreateDate {
  (params?: { locale?: string; date?: Date }): IFullDateData;
}

export const createDate: ICreateDate = (params) => {
  const locale = params?.locale ?? "default";

  const d = params?.date ?? new Date();
  const dayNumber = d.getDate();
  const day = d.toLocaleDateString(locale, { weekday: "long" });
  const dayNumberInWeek = d.getDay();
  const dayShort = d.toLocaleDateString(locale, { weekday: "short" });
  const year = d.getFullYear();
  const yearShort = d.toLocaleDateString(locale, { year: "2-digit" });
  const month = d.toLocaleDateString(locale, { month: "long" });
  const monthShort = d.toLocaleDateString(locale, { month: "short" });
  const monthNumber = d.getMonth() + 1;
  const monthIndex = d.getMonth();
  const timestamp = d.getTime();
  const week = getWeekNumber(d);

  return {
    date: d,
    dayNumber,
    day,
    dayNumberInWeek,
    dayShort,
    year,
    yearShort,
    month,
    monthShort,
    monthNumber,
    monthIndex,
    timestamp,
    week,
  };
};
