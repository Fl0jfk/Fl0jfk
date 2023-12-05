import React, { useState, useRef } from "react";
import Slide from "./Slide";

function Slider({ props }: SliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.pageX;
    const diffX = x - startX;
    const newScrollLeft = scrollLeft - diffX;
    containerRef.current.scrollLeft = newScrollLeft;
  };

  return (
    <div
      ref={containerRef}
      className="flex items-center overflow-x-scroll snap-x snap-mandatory cursor-grab select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {props.map((testimonial) => {
        return (
          <Slide
            author={testimonial.author}
            key={testimonial.id}
            job={testimonial.job}
            photoAuthor={testimonial.photoAuthor}
            testimonial={testimonial.testimonial}
            website={testimonial.website}
            linkedin={testimonial.linkedin}
          />
        );
      })}
    </div>
  );
}

type SliderProps = {
  props: any[];
};

export default Slider;
