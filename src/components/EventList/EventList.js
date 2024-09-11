import { NavLink } from "react-router-dom";
import "./EventList.css";
import { useState } from "react";

export function EventList({ eventListData }) {
  const [abbreviatedEventList, setAbbreviatedEventList] = useState(
    eventListData.eventList.filter((el, i) => i < 5)
  );
  const [likedEventList, setLikedEventList] = useState([]);

  function takeFormValues(e) {
    likedEventList.includes(e.target.id)
      ? likedEventList.splice(likedEventList.indexOf(e.target.id), 1)
      : setLikedEventList([...likedEventList, e.target.id]);
  }

  return (
    <div className="event-list">
      <NavLink to={"#"} className={"event-list__link"}>
        <h3 className="block-title">{eventListData.title}</h3>
        <img
          className={`event-list__link-arrow`}
          src={eventListData.linkMoreImg}
          alt="стрелка статуса меню"
        />
      </NavLink>
      <ul className="event-list__items">
        {abbreviatedEventList.map((el) => {
          return (
            <li className="event-list__item">
              <input
                onClick={(e) => {
                  takeFormValues(e);
                }}
                key={el.id}
                id={el.id}
                className="event-list__item-input"
                type="checkbox"
                name={el.title}
              />
              <label htmlFor={el.id} className="event-list__item-label">
                <span className="event-list__item-title">{el.title}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
