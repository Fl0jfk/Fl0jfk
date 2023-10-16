import Image from "next/image";
import { useEffect, useState } from 'react';
import { useData } from "@/app/contexts/data";

function Carousel ({ slides }: Slides) {
    const data = useData();
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timerSlider = setInterval(timer, 10000);
    function timer (){
        setCurrent(current+1);
        if (current >= slides.length) {
            setCurrent(current === length - 1 ? 0 : current + 1);
          }
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    /*useEffect(() => {

    })*/
    return (
        <div className='w-full flex h-[300px] justify-center items-center px-[50px]'>
            <div className="w-full h-full flex justify-center items-center">
                { data.others[0] && <Image src={data.others[0].src} width={50} height={50} className='z-10 cursor-pointer absolute left-[10%]' onClick={prevSlide} alt={data.others[0].name}/>}
                { data.others[1] && <Image src={data.others[1].src} width={50} height={50} className='z-10 cursor-pointer absolute right-[10%]' onClick={nextSlide} alt={data.others[1].name}/>}
                {slides.map((slide, index) => {
                    return (
                        <div className={`${index === current ? ' opacity-1 scale-110 w-[90%]' : ' opacity-0.5 ease scale-90 w-[1%]'} flex rounded bg-white duration-1000 h-full p-[30px] items-center`} key={index}>
                            {index === current && (
                                <div className="flex w-full flex-col p-4">  
                                    <div className="flex items-center gap-4">
                                        <Image src={slide.photoAuthor} alt={`Photo de ${slide.author}`} width={60} height={60} className="rounded-full"/>
                                        <p className="text-2xl text-black">{slide.author}</p>
                                    </div>
                                    <p className="text-black">{slide.testimonial}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

type Slides = {
    slides: any[];
}

export default Carousel;