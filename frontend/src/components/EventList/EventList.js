import "./EventList.css";

export function EventList({
  eventListData,
  eventStatesList,
  setEventsStatesList,
}) {
  const eventList = eventListData;

  function takeFormValues(el) {
    for (let key in eventStatesList) {
      if (String(key) === el.id) {
        setEventsStatesList({
          ...eventStatesList,
          [key]: !eventStatesList[key],
        });
        return;
      }
    }
    const newData = eventStatesList.map((item) => {
      if (item.id === el.id) {
        item.selected = !item.selected;
      }
      return item;
    });
    setEventsStatesList(newData);
  }

  return (
    <ul className="event-list__items">
      {eventList.map((el) => {
        return (
          <li className="event-list__item">
            <button
              onClick={() => {
                takeFormValues(el);
              }}
              key={el.id}
              id={el.id}
              className={`event-list__item-button ${
                eventStatesList.find((item) => item.id === el.id).selected
                  ? "event-list__item-button_checked"
                  : ""
              }`}
              name={el.id}
              value={el.title}
            >
              {el.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
