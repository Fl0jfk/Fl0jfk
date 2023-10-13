"use client"

import Navbar from '../navbar/Navbar';
import { useState } from 'react';
import Image from 'next/image';
import { useData } from '@/app/contexts/data';
import CrossButton from '../buttons/CrossButton';

function Header(){
    const data = useData();
    const [menuOpened, setMenuOpened] = useState(false);
    const handleClick = () => {
        setMenuOpened(!menuOpened)
    }
    return (
        <header className="flex grow gap-2 p-4 justify-between">
            <div className='w-2/12 h-[40]'>
                {data.profile.memoji && 
                    <Image src={data.profile.memoji} alt='Mon memoji' width={150} height={150}/>
                }
            </div>
            <div className='w-10/12 sm:flex sm:justify-end md:flex md:justify-end'>
                <Navbar menuOpened={menuOpened}/>
                <div className='flex justify-end w-[40] h-[40] items-center' onClick={() => handleClick()}>
                    <CrossButton/>
                </div>
            </div>
        </header>
    )
}

export default Header;