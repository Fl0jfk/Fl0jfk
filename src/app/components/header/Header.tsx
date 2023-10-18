"use client"

import Navbar from '../navbar/Navbar';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useData } from '../../contexts/data';
import CrossButton from '../buttons/CrossButton';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';	
import ClickAwayListener from 'react-click-away-listener';

function Header(){
    const data = useData();
    const { scrollY } = useScroll();
    const [menuOpened, setMenuOpened] = useState(false);
    const [hidden, setHidden ] = useState(false);
    const handleClick = () => {
        setMenuOpened(!menuOpened)
    };
   useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if(latest > previous && latest > 150 ){
        setHidden(true);
    } else {
        setHidden(false);
    }
    });
    const handleClickAway = () => {
        setMenuOpened(false)
    }
    return (
        <ClickAwayListener onClickAway={() => {handleClickAway()}}>
            <motion.header 
                variants={{ visible: { y: 0 }, hidden: { y: "-100%" }}} 
                animate={hidden ? "hidden" : "visible"}
                transition={{duration: 0.35, ease: "easeInOut"}}
                className="flex p-4 justify-between w-full md:fixed sm:fixed z-[8] md:mb-[100px] sm:opacity-80 md:opacity-80 bg-[#000000]">
                    <div className='w-2/12 h-[100px] md:h-[50px] sm:h-[30px] flex items-center pt-4'>
                        {data.profile.memoji && 
                            <Image src={data.profile.memoji} alt='Mon memoji' width={100} height={100} className='cursor-pointer'/>
                        }
                    </div>
                    <div className='w-10/12 flex justify-end items-stretch sm:mt-[-5px]'>
                        <Navbar menuOpened={menuOpened}/>
                        <div className='flex justify-end w-[40] h-[100px] md:h-[50px] sm:h-[30px] items-stretch' onClick={() => handleClick()}>
                            <CrossButton menuOpened={menuOpened}/>
                        </div>
                    </div>
            </motion.header>
        </ClickAwayListener>
    )
}

export default Header;