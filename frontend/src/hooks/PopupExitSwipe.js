import { useState, useEffect, useRef } from "react";

const PopupExitSwipe = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const modalRef = useRef();
  const modalOverlay = useRef();

  const handleTouchStart = (e) => {
    if (!e.target.classList.contains("ymaps-2-1-79-events-pane")) {
      e.preventDefault();
      modalRef.current.style.transform = "translateY(0px)";
      modalRef.current.style.transition = "0.4s linear";

      if (e.target === document.querySelector(".popup")) {
        modalRef.current.style.transform = `translateY(83vh)`;
        setTimeout(() => {
          setIsModalOpen(!isModalOpen);
        }, 400);
      }
    }
  };

  const handleTouchMove = (e) => {
    if (!e.target.classList.contains("ymaps-2-1-79-events-pane")) {
      e.preventDefault();

      if (e.target) {
      }
      let translateY = Math.round(
        (modalRef.current.offsetHeight *
          (e.touches[0].clientY -
            modalRef.current.getBoundingClientRect().top)) /
          window.innerHeight
      );

      if (translateY >= 100) {
        modalRef.current.style.transform = `translateY(83vh)`;
        setTimeout(() => {
          setIsModalOpen(!isModalOpen);
        }, 400);
      }
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      modalRef.current.style.transition = "";
    }, 100);
  };

  useEffect(() => {
    modalRef.current.style.transform = "translateY(83vh)";
    modalRef.current.style.transition = "0.4s linear";
    setTimeout(() => {
      modalRef.current.style.transform = `translateY(0)`;
    }, 10);
  }, []);

  useEffect(() => {
    document.addEventListener("touchstart", handleTouchStart, false);
    document.addEventListener("touchmove", handleTouchMove, false);
    document.addEventListener("touchend", handleTouchEnd, false);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart, false);
      document.removeEventListener("touchmove", handleTouchMove, false);
      document.removeEventListener("touchend", handleTouchEnd, false);
    };
  });

  return { isModalOpen, setIsModalOpen, ref: modalRef, modalRef: modalOverlay };
};

export default PopupExitSwipe;
