'use client'

import Link from 'next/link';

function Navbar(){
    return (
        <nav className='flex gap-6 text-2xl'>
            <Link className='hover:text-greenPastel' href="#about">About</Link>
            <Link className='hover:text-greenPastel' href="#skills">Skills</Link>
            <Link className='hover:text-greenPastel' href="#portfolio">Portfolio</Link>
            <Link className='hover:text-greenPastel' href="#contact">Contact</Link>
        </nav>
    )
}

export default Navbar;