import { locationApi } from "../../utils/YandexMapApi";
import "./MapBlock.css";

export function MapBlock({ mapBlockData }) {
  return (
    <div className="map-block">
      <h3 className="block-title">{mapBlockData.title}</h3>
      <div className="map-block__map-frame">{locationApi.getMyLocation()}</div>
    </div>
  );
}
