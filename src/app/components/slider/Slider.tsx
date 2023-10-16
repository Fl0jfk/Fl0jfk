import Slide from './Slide';
import Carousel from "nuka-carousel";

function Slider ({props} :SliderProps){
    return (
        <div className={`sm:py-16 py-6 flex justify-center items-center flex-col relative `}>
            <Carousel autoplay autoplayInterval={4000} wrapAround pauseOnHover>
                {props.map((slide) => (
                    <Slide key={slide.id} {...slide} />
                ))}
            </Carousel>
        </div>
    )
}

type SliderProps = {
	props:any[];
};

export default Slider;