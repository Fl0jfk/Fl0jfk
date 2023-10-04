import Link from 'next/link';

function Navbar (){
    return (
        <nav className='flex gap-6'>
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#contact">Contact</Link>
        </nav>
    )
}

export default Navbar;