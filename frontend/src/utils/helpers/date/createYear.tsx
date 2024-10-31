import { createDate, IFullDateData } from "./createDate";
import { createMonth } from "./createMonth";

interface TCreateYear {
  (params?: { year?: number; locale?: string; monthNumber?: number }): {
    createYearMonthes: () => IFullDateData[][];
    // month: TcreateMonthReturnedData;
    year: number;
  };
}

interface TgetMonthDays {
  (monthIndex: number): IFullDateData[];
}

export const createYear: TCreateYear = (params) => {
  const locale = params?.locale ?? "default";
  const monthCount = 12;
  const today = createDate();
  const year = params?.year ?? today.year;
  // const monthNumber = params?.monthNumber ?? today.monthNumber;

  // const month = createMonth({ date: new Date(year, monthNumber - 1), locale });
  const getMonthDays: TgetMonthDays = (monthIndex) => {
    return createMonth({
      date: new Date(year, monthIndex),
      locale,
    }).createMonthDays();
  };
  const createYearMonthes = () => {
    const monthes = [];
    for (let i = 0; i <= monthCount - 1; i++) {
      monthes[i] = getMonthDays(i);
      console.log(monthes[i]);
    }
    return monthes;
  };
  return {
    createYearMonthes,
    // month,
    year,
  };
};
