// import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import "./MapBlock.css";
import YandexMapApi from "../../utils/YandexMapApi";

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
          alt="стрелка сслки на модальное окно карты"
        />
      </button>
      <div className="map-block__map-frame">
        <YandexMapApi />
        {/* <YMaps>
          <Map
            defaultState={{
              center: [55.75, 37.57],
              zoom: 9,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            <Placemark defaultGeometry={[55.75, 37.57]} />
          </Map>
        </YMaps> */}
      </div>
    </div>
  );
}
