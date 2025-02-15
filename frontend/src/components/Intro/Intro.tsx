import "./Intro.css";
import { constants } from "../../utils/constants.tsx";
import { FC, ReactNode } from "react";

// Типизация пропсов
interface IntroProps {
  children?: ReactNode;
}

export const Intro: FC<IntroProps> = ({ children }) => {
  return (
    <section className="intro">
      <div className="intro__container">
        <div className="intro__text-content">
          <h1 className="intro__title">{constants.intro.title}</h1>
          <h2 className="intro__interative-name">
            {constants.intro.interativeName}
          </h2>
          <p className="intro__interative-description">
            {constants.intro.interativeDescription}
          </p>
          <ul className="intro__interative-data">
            {constants.intro.interativeStatistic.map((el, index) => {
              return (
                <li key={`stat-${index}`} className="intro__statBox">
                  <p className="intro__statData">{el.data}</p>
                  <p className="intro__statName">{el.name}</p>
                </li>
              );
            })}
          </ul>
          <div className="intro__interative-location">
            <span className="intro__interative-location_bold">
              Место проведения:
            </span>{" "}
            {constants.intro.interativeLocation}
          </div>
        </div>
        <ul className="intro__picture-content">
          {constants.intro.interativeArts.map((el, index) => {
            return (
              <li key={`art-${index}`} className="intro__picture-cage">
                <img src={el} className="intro__picture" alt="арт" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
