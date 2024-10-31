interface IcheckDateIsEqual {
  (params: { date1: Date; date2: Date }): boolean;
}

export const checkDateIsEqual: IcheckDateIsEqual = (params) =>
  params.date1.getFullYear() === params.date2.getFullYear() &&
  params.date1.getMonth() === params.date2.getMonth() &&
  params.date1.getDate() === params.date2.getDate();
