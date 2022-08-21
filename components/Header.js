import Drawer from './Drawer';

import Link from "next/link";

import {useState} from 'react';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
        <header className="w-full px-4 py-2 text-gray-700 bg-blue-500 h-24">
            <div className="flex flex-row w-full h-full justify-between">
                <Link href="/" >
                    <a className="flex w-1/2 md:w-1/4 h-full items-center"><span className="text-xl text-gray-200 text-center">SlimChance</span></a>
                </Link>

                <nav className={`hidden md:flex-row md:flex md:w-1/2  items-center  md:justify-center h-full`}>
                    <Link href="/search"><a className="font-medium text-gray-600 hover:text-gray-900">Search</a></Link>
                </nav>

                <div className='flex items-center justify-end w-1/2 md:w-1/4 h-full'>
                    <div className='flex w-full justify-end items-center h-max'>
                        <button onClick={() => setDrawerOpen(true)} className="text-gray-500 hover:text-gray-300 active:text-white items-center flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
                        </button>

                        <Drawer open={drawerOpen} setOpen={setDrawerOpen} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;