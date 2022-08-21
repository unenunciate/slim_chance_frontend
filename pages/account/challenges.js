import Head from 'next/head';

import useAuth from '../../hooks/useAuth';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListBody from '../../components/ListBody';
import ListPagination from '../../components/ListPagination';

const Challenges = ({ d }) => {

    useAuth(true);

    const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/challenges/getUserChallenges`;

    const {page, pageMax, setPage, list, updateEndpoint} = usePaginatable(d, endpoint);

    return (
        <div className='h-full w-full'>
            <Head>
                <title>SlimChance - Bet on Healthier You</title>
            </Head>

            <Header />

            <section className='min-h-screen w-full flex flex-col justify-center items-center'>
                <ListBody list={list} />
                <ListPagination page={page} setPage={setPage} pageMax={pageMax} />
            </section>

            <Footer />
        </div>
    );
}

export default Challenges;

export async function getServerSideProps (context) {

    const page = context.req.query?.page === undefined ? 1 : context.req.query?.page;
    //const {ay} = context.req.query;
    const filterQuery = [{name:'page', value: page}];

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
        props: { p:page, fq:[{name:'penos', value: 2, options: {}, selected: false}, {name:'pens', value: 1, options: {}, selected: false},{name:'peno', value: 3, options: {}, selected: false}], d: data} 
    }
}