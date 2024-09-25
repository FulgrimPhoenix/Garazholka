import React, { useState, useCallback } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

BigCalendar.momentLocalizer(moment);

const CustomCalendar = ({ initialDates = [], onDateSelect }) => {
  const [selectedDates, setSelectedDates] = useState(initialDates);

  const handleDateClick = useCallback(
    (date) => {
      let newSelectedDates = selectedDates;
      if (newSelectedDates.includes(date)) {
        newSelectedDates = newSelectedDates.filter((d) => d !== date);
      } else {
        newSelectedDates.push(date);
      }
      setSelectedDates(newSelectedDates);
      onDateSelect(newSelectedDates);
    },
    [selectedDates, onDateSelect]
  );

  return (
    <BigCalendar
      localizer={BigCalendar.momentLocalizer(moment)}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      views={["month"]}
      step={60}
      selectable
      eventOffset={10}
      onSelectEvent={() => {}}
      components={{
        todayButton: () => null,
        day: ({ date, onSelectSlot }) => (
          <span onClick={() => handleDateClick(date)}>
            {moment(date).format("DD MMMM YYYY")}
          </span>
        ),
      }}
    />
  );
};

export default CustomCalendar;
