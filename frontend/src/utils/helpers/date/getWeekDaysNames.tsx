import { createDate } from "./createDate";

interface IgetWeekDayNamesReturnedData {
  day: string;
  dayShort: string;
}

interface IgetWeekDaysNames {
  (params: {
    firstWeekDay?: number;
    locale?: string;
  }): IgetWeekDayNamesReturnedData[];
}

export const getWeekDaysNames: IgetWeekDaysNames = (params) => {
  const { firstWeekDay = 1, locale = "default" } = params;
  const weekDayNames: IgetWeekDayNamesReturnedData[] = Array.from({
    length: 7,
  });

  const date = new Date();

  for (let i = 0; i < weekDayNames.length; ++i) {
    const { day, dayNumberInWeek, dayShort } = createDate({
      locale,
      date: new Date(date.getFullYear(), date.getMonth(), date.getDay() + i),
    });

    weekDayNames[dayNumberInWeek] = { day, dayShort };
  }
  
  return [
    ...weekDayNames.slice(firstWeekDay - 1),
    ...weekDayNames.slice(firstWeekDay - 2, firstWeekDay - 1),
  ];
};
