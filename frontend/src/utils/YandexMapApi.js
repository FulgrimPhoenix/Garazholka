import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import "./YandexMapApi.css";

export class YandexMapApi {
  constructor({ myLocation }) {
    this.myLocation = myLocation;
  }

  getMyLocation() {
    return (
      <div id={222} className="yandex-map">
        <YMaps>
          <Map
            defaultState={{ center: this.myLocation, zoom: 15 }}
            defaultOptions={""}
            style={{ width: "100%", aspectRatio: "128/128" }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            <Placemark geometry={this.myLocation} />
          </Map>
        </YMaps>
      </div>
    );
  }
}

export const locationApi = new YandexMapApi({
  myLocation: [55.975254, 37.906902],
});
