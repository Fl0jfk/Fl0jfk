import Image from 'next/image';
import { useData } from '@/app/contexts/data';


function Slide({author, job, photoAuthor, testimonial}:SliderProps){
    const quotes = useData().others[1].src;
    return (
            <div className='h-[300px] gallery-item rounded-xl flex items-center m-4 p-4 gap-4 cursor-pointer border-[1px] border-[#6A6A6A]'>
              {author && 
              <>           
                <div className='w-full flex flex-col gap-4'>
                    {photoAuthor &&<Image className='pointer-events-none rounded-full' src={photoAuthor} width={100} height={100} alt={`Photo de ${author}`}/>}
                    <div className='w-full flex flex-col'>
                      <h3 className='xl:text-2xl lg:text-2xl text-xl'>{author}</h3>
                      <p className='xl:text-xl lg:text-xl'>{job}</p>
                    </div>
                </div>
                <div>
                  <Image className='pointer-events-none' src={quotes} width={30} height={30} alt='quotes'/>
                  <p className='xl:text-xl lg:text-xl'>{testimonial}</p>
                </div>
              </>
              }  
            </div> 
    )
}

type SliderProps = {
	author: string;
  job: string;
  photoAuthor: string;
  testimonial: string;
};

export default Slide;