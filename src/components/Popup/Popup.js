import { useState } from "react";
import "./Popup.css";
import PopupExitSwipe from "../../hooks/PopupExitSwipe";

export function Popup({ children, togglePopup, isPopupOpen }) {
  const [isCloseAnimationPlay, setIsCloseAnimationPlay] = useState(false);
  const { isModalOpen, setIsModalOpen, ref } = PopupExitSwipe();

  function closeModal() {
    togglePopup();
    setIsModalOpen(!isModalOpen);
  }

  function toggleCloseAnimationPlay() {
    setIsModalOpen(!isModalOpen);
    setIsCloseAnimationPlay(!isCloseAnimationPlay);
  }

  return (
    <div
      className={`popup ${isModalOpen ? "popup_open" : ""} ${
        isCloseAnimationPlay ? "popup_closing" : ""
      }`}
      onClick={(e) => {
        if (e.target === document.querySelector(".popup")) {
          closeModal();
          toggleCloseAnimationPlay();
          setTimeout(() => {
            toggleCloseAnimationPlay();
          }, 400);
        }
      }}
      name="popupOverlay"
    >
      <div
        className={`popup__container ${
          isModalOpen ? "" : "popup__container_closing"
        }`}
        ref={ref}
      >
        <h3 className="popup__title">Hello</h3>
        <p className="popup__description">Lalalalalala</p>
        {children}
      </div>
    </div>
  );
}
