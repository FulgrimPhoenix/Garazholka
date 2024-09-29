import React, { useEffect, ReactElement } from "react";
import "./EventList.css";

type EventItem = {
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

type EventStatus = { id: string; selected: boolean };

interface IEventList {
  eventList: EventItem[];
  eventStatesList: EventStatus[];
  setEventsStatesList: (newValue: EventStatus[]) => void;
}

export function EventList({
  eventList,
  eventStatesList,
  setEventsStatesList,
}: IEventList): ReactElement {
  useEffect(() => {
    eventList.forEach((i) => console.log(i));
  }, []);

  function takeFormValues(el: EventItem) {
    const newData = eventStatesList.map((item) => {
      if (item.id === el.id) {
        item.selected = !item.selected;
      }
      return item;
    });
    setEventsStatesList(newData);
  }

  return (
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
  );
}
