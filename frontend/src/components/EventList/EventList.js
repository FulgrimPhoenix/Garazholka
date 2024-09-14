import { NavLink } from "react-router-dom";
import "./EventList.css";
import { useEffect, useState } from "react";

export function EventList({
  eventListData,
  handlePopup,
  pastePopupMarkup,
  isPopupOpen,
}) {
  const [abbreviatedEventList, setAbbreviatedEventList] = useState(
    eventListData.eventList.filter((el, i) => i < 5)
  );
  const [eventList, setEventList] = useState(eventListData.eventList);
  const [likedEventIdList, setLikedEventIdList] = useState([]);
  const [likedEventList, setLikedEventList] = useState(
    setEventButtonState(abbreviatedEventList)
  );

  function takeFormValues(e) {
    likedEventIdList.includes(e.target.id)
      ? likedEventIdList.splice(likedEventIdList.indexOf(e.target.id), 1)
      : setLikedEventIdList([...likedEventIdList, e.target.id]);
  }

  function openPopupWithMoreEvents(e) {
    e.preventDefault();
    handlePopup(true);
    pastePopupMarkup(
      <ul className="event-list__items">
        {eventList.map((el) => {
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
    );
  }

  function setEventButtonState(eventsButtons) {
    return (
      <ul className="event-list__items">
        {eventsButtons.map((el) => {
          console.log(
            likedEventIdList,
            String(el.id),
            likedEventIdList.includes(String(el.id))
          );
          return (
            <li className="event-list__item">
              <button
                onClick={(e) => {
                  takeFormValues(e);
                }}
                key={el.id}
                id={el.id}
                className={`event-list__item-button ${
                  likedEventIdList.includes(String(el.id))
                    ? "event-list__item-button_checked"
                    : ""
                }`}
                name={el.id}
              >
                {el.title}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  useEffect(() => {
    // setLikedEventList(
    //   eventList.filter((el) =>
    //     likedEventIdList.includes(String(el.id)) ? el : null
    //   )
    // );
    setLikedEventList(setEventButtonState(abbreviatedEventList));
  }, [likedEventIdList]);

  useEffect(() => {}, [isPopupOpen]);
  return (
    <div className="event-list">
      <button
        onClick={(e) => openPopupWithMoreEvents(e)}
        className={"event-list__link"}
      >
        <h3 className="block-title">{eventListData.title}</h3>
        <img
          className={`event-list__link-arrow`}
          src={eventListData.linkMoreImg}
          alt="стрелка статуса меню"
        />
      </button>
      {likedEventList}
    </div>
  );
}
