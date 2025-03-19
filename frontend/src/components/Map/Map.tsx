import { Map as YandexMap, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { MapFragment, MapRoot } from "./Map.styles";

const Map = () => {
  return (
    <MapRoot>
      <YMaps>
        <MapFragment>
          <YandexMap
            defaultState={{ center: [55.794684, 37.735773], zoom: 17 }}
            width="100%"
            height="100%"
          >
            <Placemark geometry={[55.794684, 37.735773]} />
          </YandexMap>
        </MapFragment>
      </YMaps>
    </MapRoot>
  );
};

export default Map;
