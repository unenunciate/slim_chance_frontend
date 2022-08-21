import Head from 'next/head'

import { useState, useCallback } from 'react';
import useFilterable from '../hooks/useFilterable';
import usePaginatable from '../hooks/usePaginatable';
import useUpdateEffect from '../hooks/useUpdateEffect';

import Header from '../components/Header'
import Footer from '../components/Footer'

import ListFilter from '../components/ListFilter'
import ListBody from '../components/ListBody'
import ListPagination from '../components/ListPagination'

import serialize from '../utils/serialize';

const Search = ({p, fq = [], d}) => {
    const {filterQuery, updateFilterQuery, filterQueryString} = useFilterable(fq);

    

    const {page, pageMax, setPage, list, setEndpoint} = usePaginatable(p, d.pageMax, `${process.env.NEXT_PUBLIC_NEXT_URL}/api/search?${fq.length > 0 ? serialize(fq) : ''}`, d.results);
    
    const [search, setSearch] = useState(() => {
        const result = Array(fq).find((f) => {
            return f.name === 'search';
        });
        if(result) {
            return result;
        } else {
            return '';
        }
    });

    const updateEndpoint = () => {
        setEndpoint(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/search?search=${search}&${filterQueryString}`);
    };

    return (
        <div className='h-full w-full'>
            <Head>
                <title>SlimChance - Bet on Healthier You</title>
            </Head>

            <Header />

            <section className='min-h-screen w-full flex flex-col justify-center items-center'>
                <div className='flex w-3/4 lg:w-2/3 2xl:w-1/2 py-4'>
                    <input className='w-full rounded-xl border-2 border-gray-200 placeholder-gray-400 text-gray-400 bg-white px-2 py-1' placeholder='Search' onChange={(e) => setSearch(e.target.value)}/>
                    <button className="bg-gray-200 border-2 border-gray-400 text-gray-400 rounded-lg px-2 py-1 hover:brightness-125" onClick={updateEndpoint}>Update</button>
                </div>
                
                <ListFilter filterQuery={filterQuery} updateFilterQuery={updateFilterQuery} updateEndpoint={updateEndpoint} />
                <ListBody list={list} />
                <ListPagination page={page} setPage={setPage} pageMax={pageMax} />
            </section>

            <Footer />
        </div>
    );
}

export default Search;

export async function getServerSideProps (context) {

    const page = context.req.query?.page === undefined ? 1 : context.req.query?.page;
    //const {ay} = context.req.query;
    const filterQuery = [{name:'page', value: page}];

    //const res = await fetch({method: "get", url:`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/challenges/getPage?${serialize(filterQuery)}`});
   // const data = (JSON.parse(res.body))?.data; 
   //DATE IN SCENIARO 1/13/2022
   const data = {results: [{id:1, creater: {username: "name", image: ""}, dateRange: {start: "1/12/2022", end: "1/12/2023", remaining: 364}, ante: 2000, challengeAmount: 5000, goals: {start:250, end: 180, current:230},odds: {yes: 3/4, no:1/4}},
   {id:1, creater: {username: "name42", image: ""}, dateRange: {start: "1/12/2022", end: "2/12/2023", remaining: 29}, ante: 1000, challengeAmount: 10000, goals: {start:225, end: 195, current:224},odds: {yes: 1/5, no:4/5}} ,
   {id:1, creater: {username: "name1", image: ""}, dateRange: {start: "1/12/2022", end: "3/12/2023", remaining: 58}, ante: 5000, challengeAmount: 25000, goals: {start:275, end: 215, current:272},odds: {yes: 1/3, no:2/3}} 
                ], pageMax: 1}

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { p:page, fq:[{name:'penos', value: 2, options: {}, selected: false}, {name:'pens', value: 1, options: {}, selected: false},{name:'peno', value: 3, options: {}, selected: false}], d: data} 
    }
}