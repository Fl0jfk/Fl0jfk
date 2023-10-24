import Image from 'next/image';
import Link from 'next/link';
import { useData } from '@/app/contexts/data';

function Slide({author, job, photoAuthor, testimonial, website, linkedin}:SliderProps){
    const quotes = useData().others[1].src;
    return (
            <div className='flex min-w-[75%] snap-center h-[400px] sm:h-[450px] md:h-[350px] rounded-xl sm:flex-col md:flex-col items-center justify-center m-4 p-4 sm:p-[1px] md:p-[1px] gap-4 cursor-pointer border-[1px] border-[#6A6A6A]'>
              {author && 
                <>           
                  <div className='w-1/5 flex items-center justify-center xl:gap-4 lg:gap-4 sm:gap-0 md:gap-0'>
                    <div className='flex justify-center items-center gap-4 xl:flex-col sm:gap-0 md:gap-0 lg:flex-col'>
                      <div className='w-[100px] h-[100px] relative md:w-[80px] sm:w-[80px] md:h-[50px] sm:h-[50px]'>
                        {photoAuthor &&<Image className='pointer-events-none rounded-full absolute' src={photoAuthor} fill={true} alt={`Photo de ${author}`}/>}
                      </div>
                        <h3 className='xl:text-2xl lg:text-2xl text-xl text-center'>{author}</h3>
                        <p className='xl:text-xl lg:text-xl text-center'>{job}</p>
                        <div className='flex gap-4 sm:gap-0 md:gap-0 items-center sm:flex-col md:flex-col sm:mt-[5px] md:mt-[5px]'>
                            {linkedin&& <Link href={linkedin} aria-label={`Link to profile linkedin of ${author}`}>
                                  <svg width="18px" height="18px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#fff">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                              </Link>}
                            {website&& <Link href={website} aria-label={`Link to website of ${author}`}>
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mt-[3px]'>
                                  <g stroke-width="1"></g>
                                  <g stroke-linecap="round" stroke-linejoin="round" fill="#fff"></g>
                                  <g> 
                                    <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </g>
                                </svg>
                              </Link>}
                        </div>
                      </div>
                  </div>
                  <div className='w-4/5 overflow-scroll'>
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
  website: string;
  linkedin: string;
};

export default Slide;