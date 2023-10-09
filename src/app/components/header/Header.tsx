import Navbar from '../navbar/Navbar';

function Header(){

    return (
        <header className="flex grow justify-between p-4 bg-grey">
            <h1 className='w-5/12'>Logo</h1>
            <div className='w-7/12'>
                <Navbar/>
            </div>
        </header>
    )
}

export default Header;