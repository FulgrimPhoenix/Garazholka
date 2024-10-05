import React, { useState } from "react";
import { createYear } from "../../utils/helpers/date/createYear";
import { useCalendar } from "../../hooks/useCalendar";

interface TCustomCalendar {
  locale?: string;
  selectedDate: Date;
  selectDate: (date: Date) => void;
}

const CustomCalendar = ({ locale }: TCustomCalendar): React.ReactElement => {
  console.log("date", createYear().createYearMonthes());
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const { monthesNames } = useCalendar({ locale, date: selectedDate });
  console.log(monthesNames);

  return <div className="calendar"></div>;
};

export default CustomCalendar;
