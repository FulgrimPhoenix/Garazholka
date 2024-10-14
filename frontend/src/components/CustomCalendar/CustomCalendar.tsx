import React from "react";
import { createYear } from "../../utils/helpers/date/createYear";
import { useCalendar } from "../../hooks/useCalendar";
import { formateDate } from "../../utils/helpers/date/formateDate";
import "./CustomCalendar.css";

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

  return (
    <div className="calendar">
      <div className="caledar__date-container">
        {formateDate({ date: selectedDate, format: "DD MM YYYY" })}
      </div>
      <div className="calendar__container">
        <h2 className="calendar__header">
          <div aria-hidden className="calentar__header-arrow-left" />
          {state.mode === "days" && (
            <div>
              {state.monthesNames[state.selectedMonth.monthIndex].monthShort}{" "}
              {state.selectedDate.year}
            </div>
          )}
          <div aria-hidden className="calentar__header-arrow-right" />
        </h2>
      </div>
    </div>
  );
};

export default CustomCalendar;
