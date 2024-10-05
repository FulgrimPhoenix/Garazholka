import React, { ReactElement } from "react";
import "./CalendarBlock.css"

interface TCalendarBlock {
  calendarBlockData: { title: string; linkOpenBigCalendar: string };
  openPopupWithBigCalendar: (arg: React.SyntheticEvent<EventTarget>) => void;
}

export const CalendarBlock = ({
  calendarBlockData,
  openPopupWithBigCalendar,
}: TCalendarBlock): ReactElement => {
  return (
    <div className="calendar-block">
      <button
        onClick={(e) => openPopupWithBigCalendar(e)}
        className={"calendar-block__link"}
      >
        <h3 className="block-title">{calendarBlockData.title}</h3>
        <img
          className={`calendar-block__link-arrow`}
          src={calendarBlockData.linkOpenBigCalendar}
          alt="стрелка ссылки на модальное окно карты"
        />
      </button>
    </div>
  );
};
