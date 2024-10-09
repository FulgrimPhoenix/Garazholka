import React, { useState, useEffect } from "react";
import * as ymaps from "ymaps";
import "./YandexMapApi.css";

const YandexMapApi = ({ isPopupOpen }) => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState([55.912304, 37.810425]); // Координаты центра карты
  const [zoom, setZoom] = useState(15);
  const [multiRoute, setMultiRoute] = useState(null); // Уровень масштабирования

  useEffect(() => {
    const initializeMap = () => {
      ymaps.default
        .load(
          "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=2636e3d7-04df-4dd4-b10e-8076fc792cce"
        )
        .then((res) => {
          let myPos;
          let coord;
          res.geolocation
            .get({
              provider: "yandex",
            })
            .then((coords) => {
              myPos = coords.geoObjects.get(0).properties.get("text");
              coord = [
                coords.geoObjects.position[0],
                coords.geoObjects.position[1],
              ];
              if (
                !isNaN(coords.geoObjects.position[0]) &&
                !isNaN(coords.geoObjects.position[1])
              ) {
                setCenter(myPos);

                // console.log(
                //   `My position: ${coords.geoObjects.position[0]}, ${coords.geoObjects.position[1]}`
                // );
              } else {
                console.error("Error, cant take position");
              }
              return coord;
            })
            .then((coord) => {
              // console.log(2, coord, res);
              const myMap = new res.Map(
                "map",
                {
                  center: coord,
                  zoom,
                },
                {
                  searchControlProvider: "yandex#search",
                }
              );
              setCenter(coord);
              return myMap;
            })
            .then((myMap) => {
              // console.log(22, myMap);
              setMap(myMap);
            });
        });
    };

    initializeMap();
  }, []);

  return (
    <>
      <button
        onClick={() => {
          ymaps.default.load().then((res) => {
            const currentRoute = new res.multiRouter.MultiRoute(
              {
                referencePoints: [center, "Москва, метро Арбатская"],
                params: {
                  // Тип маршрута: на общественном транспорте.
                  routingMode: "masstransit",
                },
              },
              {
                // Автоматически устанавливать границы карты так,
                // чтобы маршрут был виден целиком.
                boundsAutoApply: true,
              }
            );
            map.geoObjects.add(currentRoute);
          });
          // console.log(map, center);
        }}
      ></button>
      <div className="yandex-map" id="map"></div>
    </>
  );
};

export default YandexMapApi;
