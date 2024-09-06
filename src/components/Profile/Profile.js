import { useState } from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";
import { GroupList } from "../GroupList/GroupList";
import { EventList } from "../EventList/EventList";

export function Profile({ profileData, groupListData, eventListData }) {
  const [isGroupListOpen, setIsGroupListOpen] = useState(false);
  const [currentChoice, setCurrentChoice] = useState();

  function handlGroupMenu(e) {
    e.preventDefault();
    setIsGroupListOpen(!isGroupListOpen);
  }

  function handleListChoice(e) {
    setCurrentChoice(Number(e.target.id));
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
        <h3 className="profile__group-menu-button-text">
          {profileData.groupButtonText}
        </h3>
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
      <EventList eventListData={eventListData} />
    </section>
  );
}
