import { useState } from "react";
import "./Profile.css";
import { GroupList } from "../GroupList/GroupList";
import { EventList } from "../EventList/EventList";
import { MapBlock } from "../MapBlock/MapBlock";
import { WayTimePreferenceBlock } from "../WayTimePreferenceBlock/WayTimePreferenceBlock";
import { CalendarBlock } from "../CalendarBlock/CalendarBlock";

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
  setPopupMarkup,
  setCurrentPopupMarkupTitle,
  openPopupWithMoreEvents,
  currentPath,
  isPopupOpen,
}) {
  const [isGroupListOpen, setIsGroupListOpen] = useState(false);
  const [currentChoice, setCurrentChoice] = useState();

  function handlGroupMenu(e) {
    e.preventDefault();
    setIsGroupListOpen(!isGroupListOpen);
  }

  function handleListChoice(e) {
    setCurrentChoice(e.target.id);
  }

  function openPopupWithBigMap(e) {
    e.preventDefault();
    setPopupMarkup("/bigMap");
    setCurrentPopupMarkupTitle("/bigMap");
    handlePopup(true);
  }

  function openPopupWithBigCalendar(e) {
    e.preventDefault();
    setPopupMarkup("/bigCalendar");
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

      <EventList
        isPopupOpen={isPopupOpen}
        currentPath={currentPath}
        eventStatesList={eventStatesList}
        eventList={eventList}
        setEventsStatesList={setEventsStatesList}
        openPopupWithMoreEvents={openPopupWithMoreEvents}
      />
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
