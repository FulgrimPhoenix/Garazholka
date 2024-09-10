import "./Popup.css";

export function Popup({ children, togglePopup, isPopupOpen }) {
  return (
    <div
      className={`popup ${isPopupOpen ? "popup_open" : ""}`}
      onClick={(e) =>
        e.target == document.querySelector(".popup") ? togglePopup() : ""
      }
      name="popupOverlay"
    >
      <div className="popup__container">
        <h3 className="popup__title">Hello</h3>
        <p className="popup__description">Lalalalalala</p>
        {children}
      </div>
    </div>
  );
}
