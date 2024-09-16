import { locationApi } from "../../utils/YandexMapApi";
import "./MapBlock.css";

export function MapBlock({ mapBlockData, openPopupWithBigMap }) {
  return (
    <div className="map-block">
      <button
        onClick={(e) => openPopupWithBigMap(e)}
        className={"map-block__link"}
      >
        <h3 className="block-title">{mapBlockData.title}</h3>
        <img
          className={`map-block__link-arrow`}
          src={mapBlockData.linkOpenBigMap}
          alt="стрелка статуса меню"
        />
      </button>
      <div className="map-block__map-frame">{locationApi.getMyLocation()}</div>
    </div>
  );
}
