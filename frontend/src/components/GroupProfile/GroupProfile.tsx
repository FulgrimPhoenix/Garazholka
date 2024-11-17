import React from "react";
import "./GroupProfile.css";
import { EventList } from "../EventList/EventList";
import { IEventItem, TEventStatesList } from "../../types";

interface IGroupProfile {
  title: string;
  aboutGroup: string;
  avatar: string;
  eventList: IEventItem[];
  eventStatesList: TEventStatesList;
  setEventsStatesList: (newValue: TEventStatesList) => void;
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
        eventStatesList={eventStatesList}
        eventList={eventList}
        setEventsStatesList={setEventsStatesList}
        openPopupWithMoreEvents={openPopupWithMoreEvents}
      />
    </section>
  );
}
