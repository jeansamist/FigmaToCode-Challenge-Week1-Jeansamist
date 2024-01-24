"use client";
import React, {
  PropsWithChildren,
  FunctionComponent,
  CSSProperties,
  useState,
  useEffect,
  useRef,
} from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../assets/styles/carousel.css";
export type CarouselProps = PropsWithChildren<{
  className?: string;
  slidesVisibles?: number;
  slidesToScrool?: number;
  onSlide?: (index: number) => void;
  style?: CSSProperties;
}>;

export const Carousel: FunctionComponent<CarouselProps> = ({
  children,
  slidesVisibles = 1,
  slidesToScrool = 1,
  className = "",
  onSlide = () => {
    return;
  },
  style = {},
}) => {
  const [index, setindex] = useState(0);
  const [slidesContainerWidth, setslidesContainerWidth] = useState(100);
  const [slideWidth, setslideWidth] = useState(100);
  const [pages, setpages] = useState(1);

  // const [slidesContainerPixelsWidth, setslidesContainerPixelsWidth] = useState(0);
  // const [slidePixelsWidth, setslidePixelsWidth] = useState(0);

  const containerRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    const widthRatio = 100 / slidesVisibles;
    const nbrSlides = React.Children.count(children);
    setslidesContainerWidth(widthRatio * nbrSlides);
    setslideWidth(100 / nbrSlides);

    setpages(nbrSlides - slidesVisibles + 1);
  }, [children, slidesVisibles, slidesToScrool]);

  useEffect(() => {
    // setslidesContainerPixelsWidth(containerRef.current.clientWidth);
    // setslidePixelsWidth(slideRef.current.clientWidth);
  }, [slidesContainerWidth, containerRef, slideRef]);

  function next() {
    if (index + 1 < pages) {
      let nextIndex = index + slidesToScrool;
      if (nextIndex + 1 > pages) {
        nextIndex = nextIndex - (nextIndex - pages) - 1;
      }

      setindex(nextIndex);
      onSlide(nextIndex);
    }
  }

  function prev() {
    if (index !== 0) {
      let nextIndex = index - slidesToScrool;
      if (nextIndex < 0) {
        nextIndex = 0;
      }
      setindex(nextIndex);
      onSlide(nextIndex);
    }
  }

  return (
    <div
      style={{ ...style }}
      className={`slider${className ? ` ${className}` : ""}`}
    >
      <div
        ref={containerRef}
        className="flex slides-container"
        style={{
          width: slidesContainerWidth + "%",
          transform: `translateX(-${slideWidth * index}%)`,
        }}
      >
        {children
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            React.Children.map(children, (child: any, i: number) => (
              <div
                ref={slideRef}
                key={i}
                className="slide"
                style={{ width: slideWidth + "%" }}
              >
                {"props" in child && "type" in child ? (
                  <child.type {...child?.props} />
                ) : (
                  ""
                )}
              </div>
            ))
          : ""}
      </div>
      <div className="controls">
        <button onClick={prev} className="prev">
          <FiChevronLeft size={24} />
        </button>
        <button onClick={next} className="next">
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
