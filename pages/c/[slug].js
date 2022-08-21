import Head from 'next/head';
import { useRouter } from 'next/router';

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Chart from '../../components/Chart';
import TradeBox from '../../components/TradeBox';

import MiniProfile from '../../components/MiniProfile';
import MiniFeed from '../../components/MiniFeed';

const Challenge = ({ d }) => {
    const router = useRouter();
    
    return (
        <div className='h-full w-full'>
            <Head>
                <title>SlimChance - Bet on Healthier You</title>
            </Head>

            <Header />

            <section className='min-h-screen w-full flex flex-col justify-center items-center bg-blue-200'>
                <div className={`flex flex-row bg-gray-200 border-2 rounded-xl border-gray-400 rounded-lg px-2 py-1 w-full h-max items-center justify-between`}>
                    <div className='w-2/3 flex flex-col'>
                        <div className='w-full min-h-64 flex flex-row flex-wrap'>
                            <span>fill</span>
                        </div>
                        <Chart />
                        <TradeBox />
                    </div>
                    <div className='w-1/3 flex flex-col'>
                        <MiniProfile />
                        <MiniFeed />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Challenge;

export async function getServerSideProps (context) {


    console.log(context.req)

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