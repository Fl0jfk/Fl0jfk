'use client'

import Link from 'next/link';

function Navbar({menuOpened} :NavbarProps ){
    const menuOpen = (menuOpened ? "" : "hidden");
    const bgMenuOpen = (menuOpened ? "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)" : ""  );
    return (
        <>
        <nav style={{background: `${bgMenuOpen}`}} className={`md:${menuOpen} sm:${menuOpen} gap-6 text-2xl flex flex-col fixed justify-center items-center top-0 left-0 w-full min-h-[50vh] z-[9] opacity-95 xl:hidden lg:hidden`}>
            <Link className='hover:text-green hover:scale-110' href="#about">About</Link>
            <Link className='hover:text-green hover:scale-110' href="#skills">Skills</Link>
            <Link className='hover:text-green hover:scale-110' href="#portfolio">Portfolio</Link>
            <Link className='hover:text-green hover:scale-110' href="#contact">Contact</Link>
        </nav>
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