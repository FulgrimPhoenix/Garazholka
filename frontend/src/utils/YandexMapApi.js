import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

export class YandexMapApi {
  constructor({ myLocation }) {
    this.myLocation = myLocation;
  }

  getMyLocation() {
    return (
      <YMaps>
        <Map
          defaultState={{ center: this.myLocation, zoom: 15 }}
          defaultOptions={""}
          style={{ width: "100%", aspectRatio: "128/82" }}
        >
          <Placemark geometry={this.myLocation} />
        </Map>
      </YMaps>
    );
  }
}

export const locationApi = new YandexMapApi({
  myLocation: [55.975254, 37.906902],
});
