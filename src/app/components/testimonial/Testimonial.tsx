import { useData } from "@/app/contexts/data";
import Slider from "../slider/Slider";

function Testimonial (){
    const data = useData();
    return (
        <>
            {data.testimonials[0] &&
                <section className="p-4 flex flex-col w-full justify-center items-center">
                    <h2 className='text-7xl mb-10 md:text-5xl sm:text-4xl'>Testimonials</h2>
                    <div className="bg-primary w-full overflow-hidden">
                        <div className={`container mx-auto`}>
                            <div className={`xl:max-w-[1280px] w-full`}>
                                <Slider props={data.testimonials}/>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Testimonial;