import React from "react";
import "./GroupProfile.scss";
import { EventList } from "../EventList/EventList";
import { IEventItem, IGroupFullData, TEventStatesList } from "../../types";
import { constants } from "../../utils/constants";

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
        <p className="group-profile__followers-number"><span style={{fontWeight: 900}}>Учасников в группе: </span>{followers.length}</p>
        <p className="group-profile__group-id"><span style={{fontWeight: 900}}>ID группы: </span>{id}</p>
      </div>
      <div className="group-profile__events-block">
        <button
          onClick={(e) => openPopupWithMoreEvents(e)}
          className={"group-profile__events-block-link"}
        >
          <h3 className="block-title">Что хочешь?</h3>
          <img
            className={`group-profile__events-block-link-arrow`}
            src={constants.eventListData.linkMoreImg}
            alt="стрелка статуса меню"
          />
        </button>
      <EventList
        isPopupOpen={isPopupOpen}
        eventStatesList={eventStatesList}
        eventList={eventList}
        setEventsStatesList={setEventsStatesList}
      />
      </div>
      <button onClick={() => {}} className="group-profile__group-select-button">Выбрать эту группу</button>
      <div className="group-profile__participants">
        <h2 className="group-profile__participants-title">
          <span style={{margin: "auto auto auto 15px"}}>Участники группы</span>
        </h2>
        <ul className="group-profile__participants-list">
          {followers.map(follower => {
            return(<li key={follower.id} className="group-profile__participants-list-item">
              <img className="group-profile__participants-list-item-avatar" src={follower.avatar} alt="аватвр пользователя" />
              <p className="group-profile__participants-list-item-name">{follower.name} {follower.surname}</p>
            </li>)
          })}
        </ul>
      </div>
    </section>
  );
}
