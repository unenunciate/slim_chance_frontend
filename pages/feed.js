import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import InfiniteScrollContainer from '../components/InfiniteScrollContainer';

const Feed = ({d}) => {
    const router = useRouter();

    return (
        <div className='h-full w-full'>
            <Head>
                <title>SlimChance - Feed</title>
            </Head>

            <Header />

            <div className='min-h-screen w-full justify-center items-center'>
                <section className='max-h w-full md:w-3/4 xl:w-1/2'>
                    <InfiniteScrollContainer endpoint={""} list={d} />
                </section>
            </div>
        </div>
    );
}

export default Feed;

export async function getServerSideProps (context) {
    //const res = await fetch({method: "get", url:`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/challenges/getPage?${serialize(filterQuery)}`});
   // const data = (JSON.parse(res.body))?.data; 
   //DATE IN SCENIARO 1/13/2022
   const data = [{id:1, creater: {username: "name", image: ""}, dateRange: {start: "1/12/2022", end: "1/12/2023", remaining: 364}, ante: 2000, challengeAmount: 5000, goals: {start:250, end: 180, current:230},odds: {yes: 3/4, no:1/4}},
   {id:1, creater: {username: "name42", image: ""}, dateRange: {start: "1/12/2022", end: "2/12/2023", remaining: 29}, ante: 1000, challengeAmount: 10000, goals: {start:225, end: 195, current:224},odds: {yes: 1/5, no:4/5}} ,
   {id:1, creater: {username: "name1", image: ""}, dateRange: {start: "1/12/2022", end: "3/12/2023", remaining: 58}, ante: 5000, challengeAmount: 25000, goals: {start:275, end: 215, current:272},odds: {yes: 1/3, no:2/3}} 
                ]

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { d: data } 
    }
}