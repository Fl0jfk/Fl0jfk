import Image from 'next/image';
import { useData } from '@/app/contexts/data';


function Slide({author, job, photoAuthor, testimonial}:SliderProps){
    const quotes = useData().others[1].src;
    return (
            <div className='w-[450px] rounded-xl bg-grey flex flex-col justify-center items-center p-4 gap-4 cursor-pointer hover:bg-green'>
              {author && 
              <>           
                <div className='flex items-center gap-4'>
                    {photoAuthor &&<Image className='pointer-events-none rounded-full' src={photoAuthor} width={100} height={100} alt={`Photo de ${author}`}/>}
                    <h3 className='text-2xl'>{author}</h3>
                    <p className='text-2xl'>{job}</p>
                </div>
                <div>
                  <Image className='pointer-events-none' src={quotes} width={30} height={30} alt='quotes'/>
                  <p className='text-xl'>{testimonial}</p>
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