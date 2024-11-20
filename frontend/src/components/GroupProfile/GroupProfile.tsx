import React from "react";
import "./GroupProfile.scss";
import { EventList } from "../EventList/EventList";
import { IEventItem, IGroupFullData, TEventStatesList } from "../../types";

export interface IGroupProfileData extends IGroupFullData {
  eventList: IEventItem[];
  eventStatesList: TEventStatesList;
  setEventsStatesList: (newValue: TEventStatesList) => void;
  openPopupWithMoreEvents: (e: React.SyntheticEvent<EventTarget>) => void;
  isPopupOpen: boolean;
}

export function GroupProfile({
  groupTitle,
  id,
  description,
  avatar,
  followersNumber,
  followers,
  eventList,
  eventStatesList,
  setEventsStatesList,
  openPopupWithMoreEvents,
  isPopupOpen,
}: IGroupProfileData): React.ReactElement {
  return (
    <section className="group-profile">
      <div className="group-profile__photo-container">
        <img className="group-profile__photo" src={avatar} alt="Аватар_группы" />
      </div>
      <div className="group-profile__about-me">
        <h2 className="group-profile__name">{groupTitle}</h2>
        <p className="group-profile__description">{description}</p>
        <p className="group-profile__followers-number"><span style={{fontWeight: 500}}>Учасников в группе: </span>{followers.length}</p>
      </div>
      <EventList
        isPopupOpen={isPopupOpen}
        eventStatesList={eventStatesList}
        eventList={eventList}
        setEventsStatesList={setEventsStatesList}
        openPopupWithMoreEvents={openPopupWithMoreEvents}
      />
      <button onClick={() => {}} className="group-profile__group-select-button">Выбрать эту группу</button>
      <div className="group-profile__participants">
        <h2 className="group-profile__participants-title">
          <span style={{margin: "auto auto auto 15px"}}>Участники группы</span>
        </h2>
        <ul className="group-profile__participants-list">
          {followers.map(follower => {
            return(<li className="group-profile__participants-list-item">
              <img className="group-profile__participants-list-item-avatar" src={follower.avatar} alt="аватвр пользователя" />
              <p className="group-profile__participants-list-item-name">{follower.name} {follower.surname}</p>
            </li>)
          })}
        </ul>
      </div>
    </section>
  );
}
