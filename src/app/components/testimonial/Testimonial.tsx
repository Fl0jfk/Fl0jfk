import { useData } from "@/app/contexts/data";
import Carousel from "../carousel/Carousel";

function Testimonial (){
    const data = useData();
    return (
        <>
            { data.testimonials[0] &&
                <section className="p-4">
                    <h2 className='text-7xl mb-10 md:text-5xl sm:text-4xl'>Testimonials</h2>
                    <Carousel slides={data.testimonials}/>
                </section>
            }
        </>
    )
}

export default Testimonial;