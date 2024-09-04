import { useState } from "react";
import "./Profile.css";

export function Profile({ profileData }) {
  const [isGroupListOpen, setIsGroupListOpen] = useState(false);

  function handlGroupMenu(e) {
    e.preventDefault();
    setIsGroupListOpen(!isGroupListOpen);
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

      <div className="profile__group-list"></div>
      <form className="group__form">
        <button
          onClick={(e) => handlGroupMenu(e)}
          className="profile__groupButton"
        >
          {profileData.groupButtonText}
        </button>
        <div
          className={`group-list__container ${
            isGroupListOpen
              ? "group-list__container_active"
              : "group-list__container_inactive"
          }`}
        >
          {profileData.groupList.map((el) => {
            return (
              <>
                <input
                  key={el.id}
                  id={el.id}
                  className="group-list__item-input"
                  type="radio"
                  name="singleSelect"
                />
                <label htmlFor={el.id} className="group-list__item-label">
                  {el.title}
                </label>
              </>
            );
          })}
        </div>
      </form>
    </section>
  );
}
