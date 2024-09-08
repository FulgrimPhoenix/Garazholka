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
    </div>
  );
}
