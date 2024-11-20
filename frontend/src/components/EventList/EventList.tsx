import React, { ReactElement } from "react";
import "./EventList.css";
import { constants } from "../../utils/constants";
import { IEventItem, TEventList, TEventStatesList } from "../../types";

interface IEventList {
  eventList: TEventList;
  eventStatesList: TEventStatesList;
  setEventsStatesList: (newValue: TEventStatesList) => void;
  openPopupWithMoreEvents: (e: React.SyntheticEvent<EventTarget>) => void;
  isPopupOpen: boolean;
}

export function EventList({
  eventList,
  eventStatesList,
  setEventsStatesList,
  openPopupWithMoreEvents,
}: IEventList): ReactElement {
  function takeFormValues(el: IEventItem) {
    const newData = eventStatesList.map((item) => {
      if (item.id === el.id) {
        item.selected = !item.selected;
      }
      return item;
    });
    setEventsStatesList(newData);
  }

  return (
    <>
      <div className="event-list">
        <button
          onClick={(e) => openPopupWithMoreEvents(e)}
          className={"event-list__link"}
        >
          <h3 className="block-title">{constants.eventListData.title}</h3>
          <img
            className={`event-list__link-arrow`}
            src={constants.eventListData.linkMoreImg}
            alt="стрелка статуса меню"
          />
        </button>
        <ul className="event-list__items">
          {eventList.map((el) => {
            return (
              <li className="event-list__item">
                <button
                  onClick={() => {
                    takeFormValues(el);
                  }}
                  key={el.id}
                  id={el.id}
                  className={`event-list__item-button ${
                    eventStatesList.find((item) => item.id === el.id)?.selected
                      ? "event-list__item-button_checked"
                      : ""
                  }`}
                  name={el.id}
                  value={el.title}
                >
                  {el.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
