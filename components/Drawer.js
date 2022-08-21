import Link from "next/link";
import Image from "next/image";

import {useRef, useEffect, useCallback} from 'react';
import useAuth from '../hooks/useAuth';

import DrawerFooter from "./DrawerFooter";

const Drawer = ({open, setOpen}) => {
    const {user, disconnect, isConnected} = useAuth();
    const drawerRef = useRef(null);

    const handler = useCallback((event) => {
        if(!drawerRef.current?.contains(event.target)) {
            setOpen(false);
        }
    }, [drawerRef.current, setOpen]);
  
    useEffect(() => {
        if(drawerRef.current) {
            if(open) {
                document.addEventListener('mousedown', handler)
            }
        }

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    }, [drawerRef.current, open, user]);

    return (
        <>
            <div className={`${open ? 'fixed' : 'hidden'} w-screen h-screen opacity-75 bg-black z-40 top-0 right-0`} />
            <div className={`${open ? 'fixed' : 'hidden'} w-screen h-screen z-50 top-0 right-0`}>
                <div ref={drawerRef} className="relative w-2/3 md:w-1/2 xl:w-1/3 h-full flex flex-col bg-blue-300 float-right opacity-100 items-center justify-center">
                    <button onClick={() => setOpen(false)} className='absolute left-2 top-2 text-xl text-red-500 hover:text-red-300 active:text-white p-2 hover:bg-red-100 hover:border-1 hover:border-red-300 rounded-lg active:transform active:scale-75'>X</button>
                    
                    {
                        isConnected ? (
                            <div className='w-full h-full px-2'>

                                {
                                    //fix image
                                }
                                <div className='w-full h-24 md:h-32 lg:h-48 xl:h-64 flex justify-center items-center border-b-gray-500 border-b-1 py-1'>
                                    <Link href={`/u/${user.id}`}><a className="flex hover:brightness-125 rounded-xl border-gray-100 border-2 xl:h-32 xl:w-32 lg:w-24 lg:h-24 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white hover:brightness-125 active:brightness-75"><Image src={`${!user ? user.profileImage : 'https://pbs.twimg.com/profile_images/1547744295490162688/S2m36kXI_400x400.jpg'}`} layout="responsive" width={32} height={32} /></a></Link>
                                </div>
                                
                                {
                                    //Change so doesnt show journal/challenges unless user is particpant
                                    //Change so doesnt show audience unless user is both particpant and slim member
                                }
                                <nav className='h-max w-full mt-4'>
                                    <ul className='flex flex-col p-2 w-full h-2/3 justify-between'>
                                        <li className='w-full flex items-center justify-center border-t-1 border-gray-500'><Link href="/feed" className="w-full text-center text-gray-400 hover:text-gray-100 active:text-white py-2">Feed</Link></li>
                                        <li className='w-full flex items-center justify-center border-t-1 border-gray-500'><Link href="/portfolio" className="w-full text-center text-gray-400 hover:text-gray-100 active:text-white py-2">Portfolio</Link></li>
                                        <li className='w-full flex items-center justify-center border-t-1 border-gray-500'><Link href="/account/journal" className="w-full text-center text-gray-400 hover:text-gray-100 active:text-white py-2">Journal</Link></li>
                                        <li className='w-full flex items-center justify-center border-t-1 border-gray-500'><Link href="/account/challenges" className="w-full text-center text-gray-400 hover:text-gray-100 active:text-white py-2">Challenges</Link></li>
                                        <li className='w-full flex items-center justify-center border-t-1 border-gray-500'><Link href="/account/inbox" className="w-full text-center text-gray-400 hover:text-gray-100 active:text-white py-2">Inbox</Link></li>
                                        <li className='w-full flex items-center justify-center border-t-1 border-gray-500'><Link href="/account/audience" className="w-full text-center text-gray-400 hover:text-gray-100 active:text-white py-2">Audience</Link></li>
                                        <li className='text-gray-400 hover:text-gray-100 w-full flex items-center justify-center border-t-1 border-gray-500'><Link href="/account" className="text-center py-2 w-full active:text-white">Settings</Link></li>
                                        <li className='text-gray-400 w-full flex items-center justify-center border-t-1 border-b-1 border-gray-500'><button onChange={() => disconnect()} className="text-center py-2 w-full text-lg bg-red-500 text-gray-100 active:text-white hover:bg-red-300 rounded-lg">Disconnect</button></li>
                                    </ul>
                                </nav>
                            </div>
                        ) : (
                            <div className='w-full h-full px-2'>
                                <div className='w-full h-24 md:h-32 lg:h-48 xl:h-64 flex justify-center items-center border-b-gray-500 border-b-1 py-1'>
                                    <Link href="/connect" ><a className="w-3/4 h-2/3 text-center bg-green-500 hover:bg-green-300 text-gray-400 hover:text-gray-100 active:text-white active:transform active:scale-75">Connect</a></Link>
                                </div>
                            </div>    
                        )
                    }

                    <DrawerFooter />
                </div>
            </div>
        </>
    );
}

export default Drawer;