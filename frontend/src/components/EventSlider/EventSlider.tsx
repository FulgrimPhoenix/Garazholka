import * as React from "react";
import { useEffect, useRef, useState } from "react";

interface SlideProps {
  slides: Array<any>; // Замените это на подходящий тип данных для ваших слайдов
  activeIndex: number;
  onChange: (index: number) => boolean;
}

class Slider extends React.Component<SlideProps> {
  state = {
    currentIndex: this.props.activeIndex,
  };

  private ref = useRef<HTMLDivElement>(null);

  componentDidMount() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          this.setState({
            currentIndex: Math.min(
              entries.length - 1,
              this.state.currentIndex + 1,
            ),
          });
        });
      },
      { threshold: 0.9 },
    );

    // if (this.ref.current && !observer.observe(this.ref.current)) {
    //   observer.disconnect();
    // }
  }

  componentWillUnmount() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          this.setState({
            currentIndex: Math.min(
              entries.length - 1,
              this.state.currentIndex + 1,
            ),
          });
        });
      },
      { threshold: 0.9 },
    );

    observer.disconnect();
  }

  handleChange = (index: number) => {
    this.setState({ currentIndex: index });
    this.props.onChange(index);
  };

  render() {
    const { slides, activeIndex, onChange } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="slider">
        <ul className="pagination">
          {Array.from({ length: slides.length }).map((_, i) => (
            <li
              key={i}
              className={i === currentIndex ? "active" : ""}
              onClick={() => this.handleChange(i)}
            >
              {i + 1}
            </li>
          ))}
        </ul>
        <div className="slides" ref={this.ref}>
          {slides[currentIndex]}
        </div>
      </div>
    );
  }
}

export default Slider;
