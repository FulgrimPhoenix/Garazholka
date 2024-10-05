export const getWeekNumber = (date: Date) => {
  const firstDayOfYaer = new Date(date.getFullYear(), 0, 1);
  const pastDaysYears = (date.getTime() - firstDayOfYaer.getTime()) / 86400000;

  return Math.ceil((pastDaysYears + firstDayOfYaer.getDay() + 1) / 7);
};
