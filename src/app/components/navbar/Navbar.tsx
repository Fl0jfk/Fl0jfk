'use client'

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

function Navbar({menuOpened} :NavbarProps ){
    const menuOpen = (menuOpened ? "" : "hidden");
    const bgMenuOpen = (menuOpened ? "linear-gradient(to top, #404040 0%, black 100%)" : ""  );
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
                <Link className='hover:text-green hover:scale-110' href="#about">About</Link>
                <Link className='hover:text-green hover:scale-110' href="#skills">Skills</Link>
                <Link className='hover:text-green hover:scale-110' href="#portfolio">Portfolio</Link>
                <Link className='hover:text-green hover:scale-110' href="#contact">Contact</Link>
            </motion.nav>
            }
        </AnimatePresence>
        <nav style={{background: `${bgMenuOpen}`}} className={`flex gap-6 text-2xl xl:mr-8 lg:mr-8 sm:hidden md:hidden`}>
            <Link className='hover:text-green hover:scale-110' href="#about">About</Link>
            <Link className='hover:text-green hover:scale-110' href="#skills">Skills</Link>
            <Link className='hover:text-green hover:scale-110' href="#portfolio">Portfolio</Link>
            <Link className='hover:text-green hover:scale-110' href="#contact">Contact</Link>
        </nav>
        </>
    )
}

type NavbarProps = {
    menuOpened: boolean
}

export default Navbar;