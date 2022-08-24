import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='w-full h-full'>
        <Head>
            <title>SlimChance - Bet on Healthier You</title>
        </Head>

        <Header />

        <section className="px-2 pt-32 bg-white md:px-0">
            <div className="container items-center max-w-6xl px-5 mx-auto space-y-12 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
                    <span className="block">Make <span className="block mt-1 text-blue-600 lg:inline lg:mt-0">$$$</span> Off Your <span className="block mt-1 text-blue-600 lg:inline lg:mt-0">Weight Loss</span></span>
                </h1>
                <p className="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
                    Is it really even a bet if you control the outcome?
                </p>
                <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
                    <a href="#_" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-600 rounded-md md:mb-0 hover:bg-blue-800 md:w-auto">
                        Bet On Yourself
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                    <a href="#_" className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                        Bet On Others
                    </a>
                </div>
            </div>
            <div className="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
                
            </div>
        </section>


        <section className="w-full space-y-6 bg-white pt-7 pb-7 md:pt-20 md:pb-24">
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        
                <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                    <Image layout="responsive"  width="320" height="550" src="/jogger.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
                </div>


                <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                    <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        Increase Weight Loss
                    </h2>
                    <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 ">
                        Sharing about your weight loss helps create a <span className="text-blue-600 text-bold">bigger</span> commitment than just to yourself now others have invested in your success!
                    </p>
                    <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-500 rounded-full"><span className="text-sm font-bold">✓</span></span> Keep yourself accoutable
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-500 rounded-full"><span className="text-sm font-bold">✓</span></span> Hear real feedback
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-500 rounded-full"><span className="text-sm font-bold">✓</span></span> Join a community
                        </li>
                    </ul>
                </div>

            </div>
            <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">


                <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                    <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                        Make  <span className="mt-1 text-blue-600 text-bold">$$$</span>
                    </h2>
                    <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10">
                        Put <span className="text-blue-600 text-bold">$</span> on the line then recieve <span className="text-blue-600 text-bold">$$$</span> back when you hit your goal, but thats just our promise; if others bet on you then you will get a share too.
                    </p>
                    <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-500 rounded-full"><span className="text-sm font-bold">✓</span></span> Proven to Increase Success
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-500 rounded-full"><span className="text-sm font-bold">✓</span></span> Challenging Goals Make Better Bets
                        </li>
                        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-500 rounded-full"><span className="text-sm font-bold">✓</span></span> The 
                        </li>
                    </ul>
                </div>
        
                <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                    <Image  layout="responsive"  width="320" height="550" src="/money.png" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
                </div>
            </div>
        </section>


        <section className="py-8 mb-6 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
            <div className="max-w-6xl px-10 mx-auto border-solid lg:px-12">
                <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
                    <div className="box-border flex-1 text-center border-solid sm:text-left">
                        <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
                            Boost Your Weight Loss
                        </h2>
                        <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
                            Putting your progress out there and placing a stake will help you maximize your loses.
                        </p>
                    </div>
                    <a href="#_" className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-blue-600 border border-blue-600 border-solid rounded-md cursor-pointer md:w-auto lg:mt-0 hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </section>

        <Footer />
    </div>
  )
}
