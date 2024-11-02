import React, { ReactElement } from "react";
import "./EventList.css";
import { constants } from "../../utils/constants";
import { useUrlPathName } from "../../hooks/useUrlPathName";

export type TEventItem = {
  id: string;
  title: string;
  avatar: string | undefined;
  description: string | undefined;
  followers: number;
  location: string | undefined;
  duration: number; //minutes
  isOnline: boolean;
  timeDiapason: string;
  minimumNumberOfUsers: number;
};

export type TEventStatus = { id: string; selected: boolean };

interface IEventList {
  eventList: TEventItem[];
  eventStatesList: TEventStatus[];
  setEventsStatesList: (newValue: TEventStatus[]) => void;
  openPopupWithMoreEvents: (e: React.SyntheticEvent<EventTarget>) => void;
  currentPath: string;
  isPopupOpen: boolean;
}

export function EventList({
  eventList,
  eventStatesList,
  setEventsStatesList,
  openPopupWithMoreEvents,
  isPopupOpen,
  currentPath,
}: IEventList): ReactElement {
  function takeFormValues(el: TEventItem) {
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
      {isPopupOpen ? (
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
      ) : (
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
                      eventStatesList.find((item) => item.id === el.id)
                        ?.selected
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
      )}
    </>
  );
}
