import { useState } from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";
import { GroupList } from "../GroupList/GroupList";
import { EventList } from "../EventList/EventList";
import { locationApi } from "../../utils/YandexMapApi";
import { MapBlock } from "../MapBlock/MapBlock";
import { WayTimePreferenceBlock } from "../WayTimePreferenceBlock/WayTimePreferenceBlock";
import fakeCalendar from "../../images/calendar.png";
import { constants } from "../../utils/constants";

export function Profile({
  profileData,
  groupListData,
  eventList,
  mapBlockData,
  wayTimePreferenceBlockData,
  handlePopup,
  eventStatesList,
  setEventsStatesList,
  setPopupMarkup,
  setCurrentPopupMarkupTitle,
}) {
  const [isGroupListOpen, setIsGroupListOpen] = useState(false);
  const [currentChoice, setCurrentChoice] = useState();

  function handlGroupMenu(e) {
    e.preventDefault();
    setIsGroupListOpen(!isGroupListOpen);
  }

  function handleListChoice(e) {
    setCurrentChoice(Number(e.target.id));
  }

  function openPopupWithMoreEvents(e) {
    e.preventDefault();
    setPopupMarkup("/eventList");
    setCurrentPopupMarkupTitle("/eventList");
    handlePopup(true);
  }
  function openPopupWithBigMap(e) {
    e.preventDefault();
    setPopupMarkup("/bigMap");
    setCurrentPopupMarkupTitle("/bigMap");
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
        <EventList
          eventStatesList={eventStatesList}
          eventList={eventList}
          handlePopup={handlePopup}
          setEventsStatesList={setEventsStatesList}
        />
      </div>
      <MapBlock
        mapBlockData={mapBlockData}
        openPopupWithBigMap={openPopupWithBigMap}
      />
      {
        <div
          style={{
            margin: "20px 0 0",
            width: "49%",
            aspectRatio: "1 / 1",
            background: "#D9D9D9",
            display: "flex",
            borderRadius: "12px",
          }}
        >
          <img style={{ width: "89%", margin: "auto" }} src={fakeCalendar} />
        </div>
      }
      <WayTimePreferenceBlock
        wayTimePreferenceBlockData={wayTimePreferenceBlockData}
      />
    </section>
  );
}
