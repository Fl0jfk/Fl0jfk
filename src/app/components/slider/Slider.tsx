import Slide from "./Slide";
import React, { useState, useRef } from "react";

function Slider({ props }: SliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null); 
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.getBoundingClientRect().left);
      setScrollLeft(containerRef.current.scrollLeft);
      containerRef.current.classList.add("no-select");
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.classList.remove("no-select");
    }
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.pageX - containerRef.current.getBoundingClientRect().left;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <div
    ref={containerRef}
    className="flex items-center overflow-x-scroll snap-x snap-mandatory cursor-grag"
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onMouseLeave={handleMouseUp}
    onMouseMove={handleMouseMove}
  >
            {props.map((testimonial) => {
              return <Slide author={testimonial.author} key={testimonial.id} job={testimonial.job} photoAuthor={testimonial.photoAuthor} testimonial={testimonial.testimonial} website={testimonial.website} linkedin={testimonial.linkedin}/>;
            })}
          </div>
  );
};
  
type SliderProps = {
  props: any[];
};

export default Slider;