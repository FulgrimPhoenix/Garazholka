import "./Intro.css";

export function Intro({ children, constants }) {
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
            {constants.intro.interativeStatistic.map((el) => {
              return (
                <li className="intro__statBox">
                  <p className="intro__statData">{el.data}</p>
                  <p className="intro__statName">{el.name}</p>
                </li>
              );
            })}
          </ul>
          <p className="intro__interative-location">
            <p className="intro__interative-location_bold">Место проведения:</p> {constants.intro.interativeLocation}
          </p>
          {children}
        </div>
        <div className="intro__picture-content"></div>
      </div>
    </section>
  );
}
