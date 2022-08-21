import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ListFilter from '../../components/ListFilter'
import ListBody from '../../components/ListBody'
import ListPagination from '../../components/ListPagination'
import serialize from '../../utils/serialize';

const Challenges = ({p, fq, d}) => {

    const router = useRouter();
    const loadRef = useRef(null);

    const [page, setPage] = useState(p);
    const [currentPage, setCurrentPage] = useState(p);
    const [pageMax, setPageMax] = useState(d.pageMax);

    const [challenges, setChallenges] = useState(d);
    
    const [filterQuery, setFilterQuery] = useState(fq);
    const [currentFilterQuery, setCurrentFilterQuery] = useState(fq);
    const [currentFilterQueryString, setCurrentFilterQueryString] = useState(fq.length > 0 ? serialize(fq): '');
   

    const buildURL = useMemo((input) => {
        switch(typeof input) {
            case Array:
                return `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/challenges/getPage?${serialize({page: 1, ...input})}`;
            case Number:
                return `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/challenges/getPage?page=${input}${currentFilterQuery.length > 0 ? `&${currentFilterQueryString}` : ''}`;
        }

    }, [currentFilterQuery, currentPage]);

    const getContent = useCallback(
        async (input) => {
            const url = buildURL(input);
            const res = await fetch({method: "get", url: url});
            const data = (JSON.parse(res.body))?.data;

            if (!data || data.results.length < 1) {
                setChallenges([]);
                setCurrentPage(null);
                setPage(null);
                
                switch(typeof input) {
                    case Array:
                        setCurrentFilterQuery(input);
                        setCurrentFilterQueryString(serialize(filterQuery));
                        break;
                    case Number:
                        break;
                }
            } else {
                setChallenges(data.results);

                switch(typeof input) {
                    case Array:
                        setCurrentPage(1);
                        setCurrentFilterQuery(input);
                        setCurrentFilterQueryString(serialize(filterQuery));
                        setPageMax(data.pageMax);
                        setPage(1);
                        break;
                    case Number:
                        setCurrentPage(input);
                        if(currentFilterQuery.length === 0) {
                            if(page !== input) {
                                setPageMax(data.pageMax);
                                setPage(input);
                            }
                        }
                        break;
                }
            }

            router.push(url, url, {shallow: true});
        }, [filterQuery, currentFilterQuery, page]
    )
    

    useEffect(() => {

        //if(loadRef.current) {
        if(false) {
            if(currentPage !== page && page) {
                getContent(page);
            } else if (currentFilterQuery !== filterQuery && page) {
                if(filterQuery.length === 0) {
                    setCurrentFilterQuery({})
                    setCurrentFilterQueryString('');
                    getContent(1);
                } else {
                    getContent(filterQuery);
                }
            } else if (!page && currentFilterQuery !== filterQuery) {
                if(filterQuery.length === 0) {
                    setCurrentFilterQuery({})
                    setCurrentFilterQueryString('');
                    getContent(1);
                } else {
                    getContent(filterQuery);
                }
            }
        }
    }, [page, filterQuery]);

    return (
        <div className='h-full w-full'>
            <Head>
                <title>SlimChance - Bet on Healthier You</title>
            </Head>

            <Header />

            <section className='min-h-screen w-full flex flex-col justify-center items-center'>
                <ListFilter filterQuery={filterQuery} setFilterQuery={setFilterQuery}/>
                <ListBody list={challenges} />
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