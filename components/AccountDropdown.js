import Link from "next/link";

import {useRef, useEffect, useCallback} from 'react';
import useAuth from '../hooks/useAuth';

const AccountDropdown = ({open, setOpen}) => {
  const {disconnect} = useAuth();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
        if(!dropdownRef.current?.contains(event.target)) {
            setOpen(false);
        }
    }

    if(dropdownRef.current) {
        if(open) {
            document.addEventListener('mousedown', handler)
        }
    }

    return () => {
        document.removeEventListener('mousedown', handler);
    }
  }, [dropdownRef.current, setOpen, open]);

  return (
        <div ref={dropdownRef} className={`${open ? '' : 'hidden'} fixed right-2 top-20 mt-2 z-40 w-32 h-48 bg-blue-300 rounded-2xl border-white border-2 shadow-2 shadow-black`}>
            <ul className='flex flex-col px-2 py-4 justify-between w-full h-full px-2'>
                <li className='text-gray-400 hover:text-gray-100 w-full flex justify-center items-center'><Link href="/portfolio" ><a className="flex text-center py-2 w-2/3  active:text-white">Portfolio</a></Link></li>
                <li className='text-gray-400 hover:text-gray-100 w-full flex justify-center items-center'><Link href="/account" ><a className="flex text-center py-2 w-2/3  active:text-white">Settings</a></Link></li>
                <li className='text-gray-400 w-full'><button onChange={() => disconnect()} className="py-2 w-full text-lg bg-red-500 text-gray-100 active:text-white hover:bg-red-300 rounded-lg">Disconnect</button></li>
            </ul>
        </div>
    );
}

export default AccountDropdown;