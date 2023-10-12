'use client'

import Link from 'next/link';

function Navbar(){
    return (
        <nav className='flex gap-6 text-2xl md:text-xl sm:text-xl'>
            <Link className='hover:text-green hover:scale-110' href="#about">About</Link>
            <Link className='hover:text-green hover:scale-110' href="#skills">Skills</Link>
            <Link className='hover:text-green hover:scale-110' href="#portfolio">Portfolio</Link>
            <Link className='hover:text-green hover:scale-110' href="#contact">Contact</Link>
        </nav>
    )
}

export default Navbar;