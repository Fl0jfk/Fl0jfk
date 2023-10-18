"use client"

import Navbar from '../navbar/Navbar';
import { useState } from 'react';
import Image from 'next/image';
import { useData } from '../../contexts/data';
import CrossButton from '../buttons/CrossButton';

function Header(){
    const data = useData();
    const [menuOpened, setMenuOpened] = useState(false);
    const handleClick = () => {
        setMenuOpened(!menuOpened)
    }
    return (
        <header className="flex p-4 justify-between w-full md:fixed sm:fixed z-[8] md:mb-[100px] sm:opacity-90 md:opacity-90" style={{background: "linear-gradient(to right, #404040 0%, black 100%)"}}>
            <div className='w-2/12 h-[100px] md:h-[50px] sm:h-[50px] flex items-center pt-4'>
                {data.profile.memoji && 
                    <Image src={data.profile.memoji} alt='Mon memoji' width={150} height={150} className='cursor-pointer'/>
                }
            </div>
            <div className='w-10/12 flex justify-end items-center'>
                <Navbar menuOpened={menuOpened}/>
                <div className='flex justify-end w-[40] h-[100px] md:h-[50px] sm:h-[50px] items-center' onClick={() => handleClick()}>
                    <CrossButton/>
                </div>
            </div>
        </header>
    )
}

export default Header;