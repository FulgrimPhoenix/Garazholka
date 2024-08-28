import "./Header.css";

export function Header({ constants, title }) {
  console.log(constants.header.buttons);
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <button className="header__menu-button">
        <img className="header__menu-button-pic" src={constants.header.menuIcon} alt="иконка меню"/>
      </button>
      {/* <div className="header__buttons-container">
        {constants.header.buttons.map((el) => (
          <button className="header__button">{el}</button>
        ))}
      </div> */}
    </header>
  );
}
