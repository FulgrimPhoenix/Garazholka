import { format } from "prettier";
import { createDate } from "./createDate";

interface IformateDate {
  (params: { date: Date; format: string }): any;
}

export const formateDate: IformateDate = (params) => {
  const d = createDate({ date: params.date });

  return params.format
    .replace(/\bYYYY\b/, d.year.toString())
    .replace(/\bMM\b/, d.monthNumber.toString())
    .replace(/\bDD\b/, d.dayNumber.toString());
};
