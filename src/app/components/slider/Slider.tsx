import Slide from "./Slide";

function Slider({ props }: SliderProps) {
  return (
          <div className="gallery">
            {props.map((testimonial) => {
              return <Slide author={testimonial.author} key={testimonial.id} job={testimonial.job} photoAuthor={testimonial.photoAuthor} testimonial={testimonial.testimonial}/>;
            })}
          </div>

  );
};
  
type SliderProps = {
  props: any[];
};

export default Slider;