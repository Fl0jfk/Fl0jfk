'use client'

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Navbar({menuOpened, onLinkClick} :NavbarProps ){
    const [clickOnLink, setClickOnLink] = useState(menuOpened);
    const menuOpen = (clickOnLink ? "" : "hidden");
    const bgMenuOpen = (clickOnLink ? "linear-gradient(to top, #404040 0%, black 100%)" : ""  );
    const handleLinkClick = () => {
        setClickOnLink(false);
        onLinkClick({ clickOnLink: false });
    };
    useEffect(() => {
        setClickOnLink(menuOpened)
    }, [menuOpened])
    return (
        <>
        <AnimatePresence>
           {menuOpened && <motion.nav 
                style={{background: `${bgMenuOpen}`}} 
                className={`md:${menuOpen} sm:${menuOpen} gap-6 text-2xl flex flex-col top-0 left-0 fixed justify-center origin-top items-center top-0 left-0 w-full min-h-[50vh] z-[9] opacity-99 xl:hidden lg:hidden shadow-black shadow-md`}
                initial={{translateY: "-100%"}}
                animate={{translateY: "0%", transition:{duration: 0.5, ease: "easeInOut"}}}
                exit={{translateY:"-100%", transition:{duration: 0.5, ease: "easeInOut"}}}
                >
                <Link className='hover:scale-110' href="#about" onClick={handleLinkClick}>About</Link>
                <Link className='hover:scale-110' href="#skills" onClick={handleLinkClick}>Skills</Link>
                <Link className='hover:scale-110' href="#portfolio" onClick={handleLinkClick}>Portfolio</Link>
                <Link className='hover:scale-110' href="#contact" onClick={() => setClickOnLink(false)}>Contact</Link>
            </motion.nav>
            }
        </AnimatePresence>
        <nav style={{background: `${bgMenuOpen}`}} className={`flex gap-6 text-2xl xl:mr-8 lg:mr-8 sm:hidden md:hidden z-[9]`}>
            <Link className='hover:scale-110' href="#about">About</Link>
            <Link className='hover:scale-110' href="#skills">Skills</Link>
            <Link className='hover:scale-110' href="#portfolio">Portfolio</Link>
            <Link className='hover:scale-110' href="#contact">Contact</Link>
        </nav>
        </>
    )
}

type NavbarProps = {
    menuOpened: boolean;
    onLinkClick: any;
}

export default Navbar;