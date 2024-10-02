import * as React from "react";
import { useEffect, useRef, useState } from "react";

interface SlideProps {
  slides: Array<any>; // Замените это на подходящий тип данных для ваших слайдов
  activeIndex: number;
  onChange: (index: number) => boolean;
}

const Slider = ({ slides, activeIndex, onChange }: SlideProps) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setCurrentIndex(Math.min(entries.length - 1, currentIndex + 1));
        });
      },
      { threshold: 0.9 },
    );

    // if (ref.current && !observer.observe(ref.current)) {
    //   observer.disconnect();
    // }

    return () => observer.disconnect();
  }, []);

  const handleChange = (index: number) => {
    setCurrentIndex(index);
    onChange(index);
  };

  return (
    <div className="slider">
      <ul className="pagination">
        {Array.from({ length: slides.length }).map((_, i) => (
          <li
            key={i}
            className={i === currentIndex ? "active" : ""}
            onClick={() => handleChange(i)}
          >
            {i + 1}
          </li>
        ))}
      </ul>
      <div className="slides" ref={ref}>
        {slides[currentIndex]}
      </div>
    </div>
  );
};

export default Slider;
