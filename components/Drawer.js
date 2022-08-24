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
                <div ref={drawerRef} className="relative flex flex-col items-center justify-center float-right w-2/3 h-full bg-blue-300 opacity-100 md:w-1/2 xl:w-1/3">
                    <button onClick={() => setOpen(false)} className='absolute px-4 py-2 text-xl text-red-500 rounded-lg hover:border-red-500 hover:border-1 left-2 top-2 active:text-white hover:bg-red-100 active:transform active:scale-75'>X</button>
                    
                    {
                        isConnected ? (
                            <div className='w-full h-full px-2'>

                                {
                                    //fix image
                                }
                                <div className='flex items-center justify-center w-full h-24 py-1 md:h-32 lg:h-48 xl:h-64 border-b-gray-500 border-b-1'>
                                    <Link href={`/u/${user.id}`}><a className="flex w-12 h-12 border-2 border-white border-gray-100 rounded-full hover:brightness-125 rounded-xl xl:h-32 xl:w-32 lg:w-24 lg:h-24 md:w-16 md:h-16 active:brightness-75"><Image src={`${!user ? user.profileImage : 'https://pbs.twimg.com/profile_images/1547744295490162688/S2m36kXI_400x400.jpg'}`} layout="responsive" width={32} height={32} /></a></Link>
                                </div>
                                
                                {
                                    //Change so doesnt show journal/challenges unless user is particpant
                                    //Change so doesnt show audience unless user is both particpant and slim member
                                }
                                <nav className='w-full mt-4 h-max'>
                                    <ul className='flex flex-col justify-between w-full p-2 h-2/3'>
                                        <li className='flex items-center justify-center w-full border-gray-500 border-t-1'><Link href="/feed" className="w-full py-2 text-center text-gray-400 hover:text-gray-100 active:text-white">Feed</Link></li>
                                        <li className='flex items-center justify-center w-full border-gray-500 border-t-1'><Link href="/portfolio" className="w-full py-2 text-center text-gray-400 hover:text-gray-100 active:text-white">Portfolio</Link></li>
                                        <li className='flex items-center justify-center w-full border-gray-500 border-t-1'><Link href="/account/journal" className="w-full py-2 text-center text-gray-400 hover:text-gray-100 active:text-white">Journal</Link></li>
                                        <li className='flex items-center justify-center w-full border-gray-500 border-t-1'><Link href="/account/challenges" className="w-full py-2 text-center text-gray-400 hover:text-gray-100 active:text-white">Challenges</Link></li>
                                        <li className='flex items-center justify-center w-full border-gray-500 border-t-1'><Link href="/account/inbox" className="w-full py-2 text-center text-gray-400 hover:text-gray-100 active:text-white">Inbox</Link></li>
                                        <li className='flex items-center justify-center w-full border-gray-500 border-t-1'><Link href="/account/audience" className="w-full py-2 text-center text-gray-400 hover:text-gray-100 active:text-white">Audience</Link></li>
                                        <li className='flex items-center justify-center w-full text-gray-400 border-gray-500 hover:text-gray-100 border-t-1'><Link href="/account" className="w-full py-2 text-center active:text-white">Settings</Link></li>
                                        <li className='flex items-center justify-center w-full text-gray-400 border-gray-500 border-t-1 border-b-1'><button onChange={() => disconnect()} className="w-full py-2 text-lg text-center text-gray-100 bg-red-500 rounded-lg active:text-white hover:bg-red-300">Disconnect</button></li>
                                    </ul>
                                </nav>
                            </div>
                        ) : (
                            <div className='w-full h-full px-2 mt-16'>
                                <div className='flex justify-center h-24 px-8 py-1 max-w md:h-32 lg:h-48 xl:h-64 border-b-gray-500 border-b-1'>
                                    <Link href="/connect" ><a className="flex items-center justify-center w-full text-gray-200 align-bottom bg-green-500 border-2 border-green-400 rounded-md h-2/3 hover:bg-green-300 hover:text-gray-100 active:text-white active:transform active:scale-75"><span className="flex text-3xl text-bold">Connect</span></a></Link>
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