import { useEffect, useState } from "react";
import "./Popup.css";
import PopupExitSwipe from "../../hooks/PopupExitSwipe";

export function Popup({ children, handlePopup, isPopupOpen, popupOption }) {
  const [isCloseAnimationPlay, setIsCloseAnimationPlay] = useState(false);
  const { isModalOpen, setIsModalOpen, ref, modalRef } = PopupExitSwipe();

  function closeModal() {
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    setTimeout(() => {
      handlePopup(isModalOpen);
    }, 401);
  }, [isModalOpen]);

  return (
    <div
      className={`popup ${isModalOpen ? "popup_open" : ""}`}
      onClick={(e) => {
        if (e.target === document.querySelector(".popup")) {
          closeModal();
        }
      }}
      name="popupOverlay"
      ref={modalRef}
    >
      <div
        className={`popup__container ${
          isModalOpen ? "popup__container_open" : ""
        }`}
        ref={ref}
      >
        <h3 className="popup__title">{popupOption.title}</h3>
        <p className="popup__description">{popupOption.description}</p>
        {children}
      </div>
    </div>
  );
}
