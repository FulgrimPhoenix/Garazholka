import React, { useState } from "react";
import "./Profile.css";
import { GroupList } from "../GroupList/GroupList";
import { EventList } from "../EventList/EventList";
import { MapBlock } from "../MapBlock/MapBlock";
import { WayTimePreferenceBlock } from "../WayTimePreferenceBlock/WayTimePreferenceBlock";
import { CalendarBlock } from "../CalendarBlock/CalendarBlock";
import { IProfileData, TEventList, TEventStatesList } from "../../types";
import {
  constants,
  ICalendarBlockData,
  IGroupListData,
  IMapBlockData,
  IWayTimePreferenceBlockData,
} from "../../utils/constants";

interface IProfile {
  profileData: IProfileData;
  groupListData: IGroupListData;
  calendarBlockData: ICalendarBlockData;
  eventList: TEventList;
  mapBlockData: IMapBlockData;
  wayTimePreferenceBlockData: IWayTimePreferenceBlockData;
  handlePopup: (newValue: boolean) => void;
  eventStatesList: TEventStatesList;
  setEventsStatesList: (newValue: TEventStatesList) => void;
  setCurrentPopupMarkupTitle: (newValue: string) => void;
  openPopupWithMoreEvents: (e: React.SyntheticEvent<EventTarget>) => void;
  currentPath: string;
  isPopupOpen: boolean;
}

export function Profile({
  profileData,
  groupListData,
  calendarBlockData,
  eventList,
  mapBlockData,
  wayTimePreferenceBlockData,
  handlePopup,
  eventStatesList,
  setEventsStatesList,
  setCurrentPopupMarkupTitle,
  openPopupWithMoreEvents,
  currentPath,
  isPopupOpen,
}: IProfile): React.ReactElement {
  const [isGroupListOpen, setIsGroupListOpen] = useState(false);
  const [currentChoice, setCurrentChoice] = useState<string>("");

  function handlGroupMenu(e: React.SyntheticEvent<EventTarget>): void {
    e.preventDefault();
    setIsGroupListOpen(!isGroupListOpen);
  }

  function handleListChoice(e: React.SyntheticEvent<EventTarget>) {
    const target = e.target as HTMLElement;

    if (target && target.id) {
      setCurrentChoice(target.id);
    }
  }

  function openPopupWithBigMap(e: React.SyntheticEvent<EventTarget>): void {
    e.preventDefault();
    setCurrentPopupMarkupTitle("/bigMap");
    handlePopup(true);
  }

  function openPopupWithBigCalendar(
    e: React.SyntheticEvent<EventTarget>
  ): void {
    e.preventDefault();
    setCurrentPopupMarkupTitle("/bigCalendar");
    handlePopup(true);
  }

  return (
    <section className="profile">
      <div className="profile__photo-container">
        <img
          className="profile__photo"
          src={profileData.avatar}
          alt="Аватар_пользователя"
        />
      </div>
      <div className="profile__about-me">
        <h2 className="profile__name">{profileData.name}</h2>
        <p className="profile__my-description">{profileData.aboutMe}</p>
      </div>
      <button
        onClick={(e) => handlGroupMenu(e)}
        className="profile__group-menu-button"
      >
        <h3 className="block-title">{profileData.groupButtonText}</h3>
        <img
          className={`profile__group-menu-status-arrow ${
            isGroupListOpen ? "profile__group-menu-status-arrow_open" : ""
          }`}
          src={profileData.groupButtonImg}
          alt="стрелка статуса меню"
        />
      </button>
      <GroupList
        groupListData={groupListData}
        isGroupListOpen={isGroupListOpen}
        handleListChoice={handleListChoice}
        currentListChoice={currentChoice}
      />
      <div className="profile__events-block">
        <button
          onClick={(e) => openPopupWithMoreEvents(e)}
          className={"profile__events-block-link"}
        >
          <h3 className="block-title">Что хочешь?</h3>
          <img
            className={`profile__events-block-link-arrow`}
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

      <MapBlock
        mapBlockData={mapBlockData}
        openPopupWithBigMap={openPopupWithBigMap}
      />
      <CalendarBlock
        calendarBlockData={calendarBlockData}
        openPopupWithBigCalendar={openPopupWithBigCalendar}
      />
      <WayTimePreferenceBlock
        wayTimePreferenceBlockData={wayTimePreferenceBlockData}
      />
    </section>
  );
}
