import "./WayTimePreferenceBlock.css";

export function WayTimePreferenceBlock({ wayTimePreferenceBlockData }) {
  return (
    <div className="way-time-preference-block">
      <h3 className="block-title">{wayTimePreferenceBlockData.title}</h3>
      <div className="way-time-preference-block__is-online-container">
        <input
          type="checkbox"
          className="way-time-preference-block__item-input-checkbox"
          name="isOnline"
          id="isOnline"
        />
        <label
          className="way-time-preference-block__item-label-checkbox"
          for="isOnline"
        ></label>
        <span className="way-time-preference-block__item-title">
          {wayTimePreferenceBlockData.isOnlineCheckboxTitle}
        </span>
      </div>
      <ul className="way-time-preference-block__way-time-items">
        {wayTimePreferenceBlockData.wayTimeItems.map((item) => (
          <li className="way-time-preference-block__way-time-item" key={`1${item.id}`}>
            <input className="way-time-preference-block__way-time-input-item" key={`2${item.id}`} id={item.id} type="radio" name="wayTime" />
            <label className="way-time-preference-block__way-time-label-item" key={`3${item.id}`} htmlFor={item.id}>
              
            </label>
            <span className="way-time-preference-block__way-time-title-item">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
