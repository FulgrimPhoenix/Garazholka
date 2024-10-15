import React from "react";
import { createYear } from "../../utils/helpers/date/createYear";
import { useCalendar } from "../../hooks/useCalendar";
import { formateDate } from "../../utils/helpers/date/formateDate";
import "./CustomCalendar.css";
import { checkToday } from "../../utils/helpers/date/checkToday";
import { checkDateIsEqual } from "../../utils/helpers/date/checkDateIsEqual";

interface ICustomCalendar {
  locale?: string;
  selectedDate: Date;
  selectDate: (date: Date) => void;
}

const CustomCalendar = ({ locale }: ICustomCalendar): React.ReactElement => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const { state, functions } = useCalendar({
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
            <div onClick={() => functions.setMode("monthes")}>
              {state.monthesNames[state.selectedMonth.monthIndex].monthShort}{" "}
              {state.selectedDate.year}
            </div>
          )}
          {state.mode === "monthes" && (
            <div onClick={() => functions.setMode("days")}>
              {state.selectedDate.year}
            </div>
          )}
          <div aria-hidden className="calentar__header-arrow-right" />
        </h2>
        <div className="calendar__body">
          {state.mode === "days" && (
            <>
              <div className="calendar__week-days">
                {state.weekDaysNames.map((weekDaysName) => (
                  <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
                ))}
              </div>
              <div className="calendar__days">
                {state.calendarDays.map((day) => {
                  const isToday = checkToday(day.date);
                  const isSelectedDay = checkDateIsEqual({
                    date1: day.date,
                    date2: state.selectedDate.date,
                  });
                  const isAdditionalDay =
                    day.monthIndex !== state.selectedMonth.monthIndex;
                  console.log(day);

                  return (
                    <div
                      key={`${day.dayNumber}-${day.monthIndex}-${day.year}`}
                      className={[
                        "calendar__day",
                        isToday ? "calendar__today-day" : "",
                        isSelectedDay ? "calendar__selected-day" : "",
                        isAdditionalDay ? "calendar__additional-day" : "",
                      ].join(" ")}
                    >
                      <span className="calendar__day-date">
                        {day.dayNumber}
                      </span>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;
