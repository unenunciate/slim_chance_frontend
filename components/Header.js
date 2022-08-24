import Drawer from './Drawer';

import Link from "next/link";

import {useState} from 'react';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
        <header className="w-full px-4 py-2 text-gray-700 bg-blue-500 h-[10vh] ">
            <div className="flex flex-row justify-between w-full h-full">
                <Link href="/" >
                    <a className="flex items-center w-1/2 h-full md:w-1/4"><span className="text-xl text-center text-gray-300 hover:text-gray-100">SlimChance</span></a>
                </Link>

                <nav className={`hidden md:flex-row md:flex md:w-1/2  items-center  md:justify-center h-full`}>
                    <Link href="/search"><a className="font-medium text-gray-300 hover:text-gray-100">Search</a></Link>
                </nav>

                <div className='flex items-center justify-end w-1/2 h-full md:w-1/4'>
                    <div className='flex items-center justify-end w-full h-max'>
                        <button onClick={() => setDrawerOpen(true)} className="flex items-center justify-center text-gray-300 hover:text-gray-100 active:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
                        </button>

                        <Drawer open={drawerOpen} setOpen={setDrawerOpen} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;