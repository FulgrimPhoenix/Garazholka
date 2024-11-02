import React from "react";
import "./GroupProfile.css";
import { EventList, TEventItem, TEventStatus } from "../EventList/EventList";

interface IGroupProfile {
  title: string;
  aboutGroup: string;
  avatar: string;
  eventList: TEventItem[];
  eventStatesList: TEventStatus[];
  setEventsStatesList: (newValue: TEventStatus[]) => void;
  openPopupWithMoreEvents: (e: React.SyntheticEvent<EventTarget>) => void;
  currentPath: string;
  isPopupOpen: boolean;
}

export function GroupProfile({
  title,
  aboutGroup,
  avatar,
  eventList,
  eventStatesList,
  setEventsStatesList,
  openPopupWithMoreEvents,
  currentPath,
  isPopupOpen,
}: IGroupProfile): React.ReactElement {
  return (
    <section className="profile">
      <div className="profile__photo-container">
        <img className="profile__photo" src={avatar} alt="Аватар_группы" />
      </div>
      <div className="profile__about-me">
        <h2 className="profile__name">{title}</h2>
        <p className="profile__my-description">{aboutGroup}</p>
      </div>
      <EventList
        isPopupOpen={isPopupOpen}
        currentPath={currentPath}
        eventStatesList={eventStatesList}
        eventList={eventList}
        setEventsStatesList={setEventsStatesList}
        openPopupWithMoreEvents={openPopupWithMoreEvents}
      />
    </section>
  );
}
