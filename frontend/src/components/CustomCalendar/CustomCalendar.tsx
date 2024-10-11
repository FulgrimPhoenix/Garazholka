import React from "react";
import { createYear } from "../../utils/helpers/date/createYear";
import { useCalendar } from "../../hooks/useCalendar";

interface ICustomCalendar {
  locale?: string;
  selectedDate: Date;
  selectDate: (date: Date) => void;
}

const CustomCalendar = ({ locale }: ICustomCalendar): React.ReactElement => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const { state } = useCalendar({
    firstWeekDay: 2, //с какого дня начинается неделя
    locale,
    date: selectedDate,
  });

  console.log(state);

  return <div className="calendar"></div>;
};

export default CustomCalendar;
