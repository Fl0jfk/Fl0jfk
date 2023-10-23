import Slide from "./Slide";

function Slider({ props }: SliderProps) {
  return (
          <div className="flex items-center overflow-x-scroll snap-x snap-mandatory">
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