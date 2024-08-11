import "./Header.css";

export function Header({ constants }) {
  console.log(constants.header.buttons);
  return (
    <header className="header">
      <div className="header__logo">{constants.header.logo}</div>
      <div className="header__buttons-container">
        {constants.header.buttons.map((el) => (
          <button className="header__button">{el}</button>
        ))}
      </div>
    </header>
  );
}
