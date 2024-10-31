import { checkDateIsEqual } from "./checkDateIsEqual";

interface IcheckToday {
  (date: Date): boolean;
}

export const checkToday: IcheckToday = (date) => {
  const today = new Date();

  return checkDateIsEqual({ date1: today, date2: date });
};
