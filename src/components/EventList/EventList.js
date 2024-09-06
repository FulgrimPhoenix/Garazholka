import { NavLink } from "react-router-dom";
import "./EventList.css";

export function EventList({ eventListData }) {
  return (
    <div className="event-list">
      <NavLink to={"#"} className={"event-list__link"}>
        <h3 className="event-list__link-title">{eventListData.title}</h3>
        <img
          className={`event-list__link-arrow`}
          src={eventListData.linkMoreImg}
          alt="стрелка статуса меню"
        />
      </NavLink>
      <ul className="event-list__list"></ul>
    </div>
  );
}
