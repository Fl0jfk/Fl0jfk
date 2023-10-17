import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from 'react';
import Slide from "./Slide";

function Slider({ props }: SliderProps) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <div ref={targetRef} className="relative h-[300vh] bg-neutral-900 mt-[-150px]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {props.map((testimonial) => {
              return <Slide author={testimonial.author} key={testimonial.id} job={testimonial.job} photoAuthor={testimonial.photoAuthor} testimonial={testimonial.testimonial}/>;
            })}
          </motion.div>
        </div>
      </div>
  );
};
  
type SliderProps = {
  props: any[];
};

export default Slider;