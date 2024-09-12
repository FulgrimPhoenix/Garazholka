import { useState, useEffect, useRef } from "react";

const PopupExitSwipe = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const modalRef = useRef();

  const handleTouchStart = (event) => {
    event.preventDefault();
    modalRef.current.style.transform = "translateY(0px)";
    modalRef.current.style.transition = "0.4s linear";
  };

  const handleTouchMove = (event) => {
    event.preventDefault();

    let translateY = Math.round(
      (modalRef.current.offsetHeight *
        (event.touches[0].clientY -
          modalRef.current.getBoundingClientRect().top)) /
        window.innerHeight,
    );

    if (translateY >= 0 || !isModalOpen) {
      modalRef.current.style.transform = `translateY(83vh)`;
      setTimeout(() => {
        setIsModalOpen(!isModalOpen);
      }, 400);
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      modalRef.current.style.transition = "";
    }, 100);
  };

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

  return { isModalOpen, setIsModalOpen, ref: modalRef };
};

export default PopupExitSwipe;
