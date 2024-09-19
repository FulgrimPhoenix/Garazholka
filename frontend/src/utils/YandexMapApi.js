import React, { useState, useEffect } from "react";
import * as ymaps from "ymaps";
import "./YandexMapApi.css";

const YandexMapApi = ({ isPopupOpen }) => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState([55.76, 37.64]); // Координаты центра карты
  const [zoom, setZoom] = useState(15); // Уровень масштабирования

  useEffect(() => {
    const initializeMap = () => {
      ymaps.default.load().then((res) => {
        const myMap = new res.Map(
          "map",
          {
            center,
            zoom,
          },
          {
            searchControlProvider: "yandex#search",
          }
        );

        res.geolocation
          .get({
            provider: "yandex",
          })
          .then((coords) => {
            console.log(coords);

            if (!isNaN(coords.longitude) && !isNaN(coords.latitude)) {
              myMap.setCenter([coords.longitude, coords.latitude]);
              console.log(
                `My position: ${coords.longitude}, ${coords.latitude}`
              );
            } else {
              console.error("Error, cant take position");
            }
          });

        setMap(myMap);
      });
    };

    initializeMap();
  }, []);

  return <div className="yandex-map" id="map"></div>;
};

export default YandexMapApi;
