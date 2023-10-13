'use client'

import Link from 'next/link';

function Navbar({menuOpened} :NavbarProps ){
    const menuOpen = (menuOpened ? "flex fixed justify-center items-center top-0 left-0 w-full min-h-[50vh] z-30 opacity-95" : "hidden")
    const bgMenuOpen = (menuOpened ? "linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)" : ""  )
    return (
        <nav style={{background: `${bgMenuOpen}`}} className={`flex gap-6 text-2xl md:flex-col sm:flex-col md:${menuOpen} sm:${menuOpen}`}>
            <Link className='hover:text-green hover:scale-110' href="#about">About</Link>
            <Link className='hover:text-green hover:scale-110' href="#skills">Skills</Link>
            <Link className='hover:text-green hover:scale-110' href="#portfolio">Portfolio</Link>
            <Link className='hover:text-green hover:scale-110' href="#contact">Contact</Link>
        </nav>
    )
}

type NavbarProps = {
    menuOpened: boolean
}

export default Navbar;