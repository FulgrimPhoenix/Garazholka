import React, { useEffect, useState } from "react";
import { createYear } from "../../utils/helpers/date/createYear";
import { useCalendar } from "../../hooks/useCalendar";
import { formateDate } from "../../utils/helpers/date/formateDate";
import "./CustomCalendar.css";
import { checkToday } from "../../utils/helpers/date/checkToday";
import { checkDateIsEqual } from "../../utils/helpers/date/checkDateIsEqual";
import { IgetWeekDayNamesReturnedData } from "../../utils/helpers/date/getWeekDaysNames";
import { IFullDateData } from "../../utils/helpers/date/createDate";
import { constants, Iranges } from "../../utils/constants";

interface ICustomCalendar {
  locale?: string;
  selectedDate: Date;
}

const CustomCalendar = ({
  locale,
  selectedDate,
}: ICustomCalendar): React.ReactElement => {
  const [currentDate, setCurrentDate] = React.useState(selectedDate);
  const [listOfUserSelectedDates, setListOfUserSelectedDates] = React.useState<
    Record<string, Date[][]>
  >({});

  const { state, functions } = useCalendar({
    firstWeekDay: 2, //с какого дня начинается неделя
    locale,
    date: currentDate,
  });

  // useEffect(() => {
  //   console.log(listOfUserSelectedDates);
  // }, [listOfUserSelectedDates]);

  return (
    <div className="calendar">
      <div className="calendar__container">
        <h2 className="calendar__header">
          <div
            aria-hidden
            onClick={() => functions.onClickArrow({ direction: "left" })}
            className="calentar__header-arrow-left"
          />
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
          <div
            aria-hidden
            onClick={() => functions.onClickArrow({ direction: "right" })}
            className="calentar__header-arrow-right"
          />
        </h2>
        <div className="calendar__body">
          {state.mode === "days" && (
            <>
              <div className="calendar__week-days">
                {state.weekDaysNames.map(
                  (
                    weekDaysName: IgetWeekDayNamesReturnedData
                  ): React.ReactElement => (
                    <div key={weekDaysName.dayShort}>
                      {weekDaysName.dayShort}
                    </div>
                  )
                )}
              </div>
              <div className="calendar__days">
                {state.calendarDays.map(
                  (day: IFullDateData): React.ReactElement => {
                    const isToday = checkToday(day.date);
                    const isSelectedDay = checkDateIsEqual({
                      date1: day.date,
                      date2: state.selectedDate.date,
                    });
                    const isAdditionalDay =
                      day.monthIndex !== state.selectedMonth.monthIndex;

                    const dayNameKey = [
                      day.date.getFullYear(),
                      day.date.getMonth(),
                      day.date.getDate(),
                    ].join("-");

                    const isDayRangesAreSelected =
                      Boolean(
                        Object.keys(listOfUserSelectedDates).find(
                          (key) => key === dayNameKey
                        )
                      ) ?? false;
                    // решить вопрос с проблемами выбранных дат

                    return (
                      <div
                        key={`${day.dayNumber}-${day.monthIndex}-${day.year}`}
                        onClick={() => {
                          functions.setSelecteDate(day);
                          setCurrentDate(day.date);                          
                        }}
                        className={[
                          "calendar__day",
                          isToday ? "calendar__today-day" : "",
                          isSelectedDay ? "calendar__selected-day" : "",
                          isAdditionalDay ? "calendar__additional-day" : "",
                          isDayRangesAreSelected
                            ? "calendar__day-with-selected-ranges"
                            : "",
                        ].join(" ")}
                      >
                        <span className="calendar__day-date">
                          {day.dayNumber}
                        </span>
                      </div>
                    );
                  }
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="calendar__time-container">
        {constants.calendarBlockData.timeRanges.ranges.map((range: Iranges) => {
          const currentRange: Date[] =
            constants.calendarBlockData.timeRanges.generateTimeRangeDates({
              selectedDate: currentDate,
              range: range.value,
            });
          const dateKey: string = [
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
          ].join("-");
          const isSelectedRange = listOfUserSelectedDates[dateKey]
            ? listOfUserSelectedDates[dateKey].find(
                (element) => element[0].getTime() === currentRange[0].getTime()
              )
            : false;
          return (
            <button
              onClick={() => {
                if (listOfUserSelectedDates[dateKey]) {
                  if (
                    listOfUserSelectedDates[dateKey].find(
                      (element) =>
                        element[0].getTime() === currentRange[0].getTime()
                    )
                  ) {
                    const listWithoutRemovedItem = listOfUserSelectedDates[
                      dateKey
                    ].filter(
                      (el) => el[0].getTime() !== currentRange[0].getTime()
                    );
                    if (listWithoutRemovedItem.length === 0) {
                      const copyOfListOfUserSelectedDates =
                        listOfUserSelectedDates;
                      delete copyOfListOfUserSelectedDates[dateKey];
                      setListOfUserSelectedDates(copyOfListOfUserSelectedDates);
                      console.log(
                        "ListOfUserSelectedDates",
                        listOfUserSelectedDates
                      );
                    } else {
                      setListOfUserSelectedDates({
                        ...listOfUserSelectedDates,
                        [dateKey]: listWithoutRemovedItem,
                      });
                    }
                  } else {
                    setListOfUserSelectedDates({
                      ...listOfUserSelectedDates,
                      [dateKey]: [
                        ...listOfUserSelectedDates[dateKey],
                        currentRange,
                      ],
                    });
                  }
                } else {
                  setListOfUserSelectedDates({
                    ...listOfUserSelectedDates,
                    [dateKey]: [...[], currentRange],
                  });
                }
              }}
              className={[
                "calendar__time-range-button",
                isSelectedRange ? "calendar__time-range-button_selected" : "",
              ].join(" ")}
            >
              {range.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCalendar;
