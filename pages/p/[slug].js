import Head from 'next/head';
import { useRouter } from 'next/router';

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


const Profile = ({ d }) => {
    const router = useRouter();
    
    return (
        <div className='h-full w-full'>
            <Head>
                <title>SlimChance - Bet on Healthier You</title>
            </Head>

            <Header />

            <section className='min-h-screen w-full flex flex-col justify-center items-center bg-blue-200'>
                <div className={`w-3/4 xl:w-1/2 flex flex-col bg-gray-200 border-2 rounded-xl border-gray-400 rounded-lg px-2 py-1 w-full h-max items-center justify-between`}>
                    <div className={"w-full h-80"}>
                        <Image href={"https://pbs.twimg.com/profile_banners/966909110821167104/1570175391/1500x500"} layout="fill" />
                    </div>
                    <div className='flex flex-col w-full h-96 bg-white'>
                        <div className='w-full flex flex-row flex-wrap justify-between px-2'>
                            <div className='w-32 h-32'>
                                <div className='flex w-full h-max rounded-full border-white border-2 z-10 -mt-16'>
                                    <Image href={"https://pbs.twimg.com/profile_images/1438589426158952453/2qo7fieI_400x400.jpg"} layout="fill"/>
                                </div>
                                
                            </div>
                            <button>
                                Edit
                            </button>
                        </div>
                     
                    </div>
                    <div className='w-1/3 flex flex-col'>
                        
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Profile;

export async function getServerSideProps (context) {
    // const res = await fetch({method: "get", url:`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/challenges/getPage?${serialize(filterQuery)}`});
   //  const data = (JSON.parse(res.body))?.data; 
   //DATE IN SCENIARO 1/13/2022
   const data = {id:1, creater: {username: "name", image: ""}, dateRange: {start: "1/12/2022", end: "1/12/2023", remaining: 364}, ante: 2000, challengeAmount: 5000, goals: {start:250, end: 180, current:230},odds: {yes: 3/4, no:1/4}}
    
    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { d: data } 
    }
}