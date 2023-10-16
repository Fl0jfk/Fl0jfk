import Image from 'next/image';
import { useData } from '@/app/contexts/data';

function Slide({author, job, photoAuthor, testimonial}:SliderProps){
  const quotes = useData().others[1].src;
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] mx-auto my-0 bg-grey hover:bg-green cursor-pointer">
      <Image src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" width={42} height={27}/>
      <p className="font-normal text-[18px] leading-[32.4px] text-white my-10">
        {testimonial}
      </p>
      <div className="flex flex-row">
        <Image src={photoAuthor} alt={author} className="rounded-full" width={100} height={100} />
        <div className="flex flex-col ml-4">
          <h4 className="font-semibold text-[20px] leading-[32px] text-white">
            {author}
          </h4>
          <p className="font-normal text-[16px] leading-[24px] text-dimWhite">
            {job}
          </p>
        </div>
      </div>
    </div>
);
}

type SliderProps = {
	author: string;
  job: string;
  photoAuthor: string;
  testimonial: string;
};

export default Slide;