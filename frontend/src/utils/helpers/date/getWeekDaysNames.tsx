import { createDate } from "./createDate";

interface TGetWeekDaysNames {
  firstWeekDay?: number;
  locale: string;
}

interface TWeekDayNames {
  day: ReturnType<typeof createDate>["day"];
  dayShort: ReturnType<typeof createDate>["dayShort"];
}

export const getWeekDaysNames = ({
  firstWeekDay = 1,
  locale = "default",
}: TGetWeekDaysNames): TWeekDayNames[] => {
  const weekDayNames: TWeekDayNames[] = Array.from({ length: 7 });

  const date = new Date();

  weekDayNames.forEach((_, i) => {
    const { day, dayNumberInWeek, dayShort } = createDate({
      locale,
      date: new Date(date.getFullYear(), date.getMonth(), date.getDay() + i),
    });
    weekDayNames[dayNumberInWeek - 1] = { day, dayShort };
  });

  return [
    ...weekDayNames.slice(firstWeekDay),
    ...weekDayNames.slice(firstWeekDay - 1, firstWeekDay),
  ];
};
