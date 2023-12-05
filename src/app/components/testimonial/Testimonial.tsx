import { useData } from "@/app/contexts/data";
import Slider from "../slider/Slider";

function Testimonial (){
    const data = useData();
    return (
        <>
            {data.testimonials[0] &&
                <section id="testimonial" className="max-w-[1500px] w-full self-center">
                    <h2 className='text-7xl mb-10 md:text-5xl sm:text-4xl text-center mt-4'>Testimonials</h2>
                    <Slider props={data.testimonials}/>
                </section>
            }
        </>
    )
}

export default Testimonial;