// Index.js
import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import SearchBar from '@/components/widget/Searchbar';
import Widget from '@/components/widget/Widget';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Map from '@/components/crowdsrouce/map';



function Index(){
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div className='min-h-screen overflow-x-hidden'>
            <div className="hero bg-cover h-max bg-[url('/img/index/herobg.png')] bg-fixed relative">
                <div className='bg-[rgba(0,0,0,0.1)] pt-10 px-10  h-screen '>
                    <div className='flex justify-between'>
                        <h1 className='text-6xl font-bold text-Black'>MUMBAI RAINFALL AND FLOOD FORECAST</h1>
                        <Image src={'https://www.climate.iitb.ac.in/wp-content/uploads/2023/07/IDP-logo-2-300x144.png'} alt='IITB Logo' width={200} height={100} />
                    </div>
                    <div className='flex justify-between'>
                        <div className=''>
                            <div className='flex flex-col'>
                                <h2 className='text-5xl mt-5 font-bold w-full text-red-700'>Dreading the Mumbai floods this monsoon?</h2>
                                <h2 className='text-5xl text-black font-light'>Fill the waterlog length FORM <br/> HELP US, HELP YOU</h2>
                                <Link href="/crowdsource/form" className='text-xl text-nowrap px-32 py-5 my-5 mx-3 rounded-md w-min text-white bg-red-700 hover:bg-red-800 '> Fill Form</Link>
                            </div>

                        </div>
                        <di v className='flex flex-col justify-around relative'>
                            <div className='flex justify-center items-center w-full mx-auto h-20 relative top-20 text-white origin-bottom'>
                                <SearchBar setSelectedOption={setSelectedOption} />
                            </div>
                            <div className='flex justify-center items-center w-full mx-auto relative text-white scale-[.85]
                             origin-cenetr'>
                                    <Widget selectedOption={selectedOption} />
                            </div>  
                        </di>
                    </div>
                    <span className='absolute bottom-20'>
                        <span className='flex gap-10 h-20 mb-5 [filter:drop-shadow(1px_1px)]'>
                            <img src='https://bfsi.eletsonline.com/wp-content/uploads/2022/09/HDFC-ERGO-General-Insurance.jpg' alt='HDFC ERGO' />
                            <img src='https://www.iitb.ac.in/themes/custom/iitb_bootstrap/logo.png' alt='IITB' />
                        </span>
                        <p className='text-slate-100 text-xl font-bold [text-shadow:_1px_1px_15px_rgb(0_0_0)]'>
                            HDFC Ergo & IIT Bombay collaboration
                        </p>
                    </span>

                </div>

            </div>
            <section className='bg-white w-screen overflow-x-hidden'>
                <div className='w-3/4 mx-auto pt-20'>
                    <h1 className='text-5xl text-blue-700 font-bold text-center py-5'>ABOUT</h1>
                    <p className='text-3xl font-light w-3/4 mx-auto leading-[3.4rem]' >
                    Climate Studies at IIT Bombay, in collaboration with HDFC Ergo, hopes to harness the power of social media to monitor Mumbai floods -- by taking help from its residents and asking them to post details about floods in their neighborhoods, and collecting this data to issue real-time geographically-specific flood alerts/warnings. The gathered data shall be used to improve flood emergency response and rescue efforts, and help develop accurate flood forecasts in the future.
                        <br />
                    Real-time information at hand can help save lives during disasters. At best, we hope to help Mumbaikars plan their monsoon days effectively. Our ultimate aim is to create a flood resilience plan for the Mumbai metropolitan region. 
                    </p> 
                </div>

                <div className='w-2/3 mx-auto pt-60 pb-20'>
                    <h1 className='text-5xl w-full text-blue-700 font-bold text-center py-5'>Real-time RAINFALL Forecasts</h1>
                    <div className='flex gap-16'>
                        <span className='flex flex-col'>
                            <video className='border border-black h-[50rem]' src='/video/index1.mp4' autoPlay loop muted controls />
                            {/* <img className='border border-black' src='/img/index/s1.png' /> */}
                        </span>
                        <p className='text-3xl font-light w-3/4 mx-auto leading-[3.4rem]' >
                            We aim to develop precise rainfall forecasts with lead times of 15 minutes to 3 days, in addition to real-time flood level data and forecasts. <br />
                            This information will help Mumbai citizens and authorities prepare and respond to potential flood events, ultimately reducing the risk of property damage, injuries, and loss of life. <br />
                            Access to real-time flood-level information also empowers communities to make informed decisions regarding their safety and well being, enhancing resilience to natural disasters.
                        </p>
                    </div>
                </div>

                <div className=' bg-cover bg-[url("/img/index/bg2.webp")] bg-fixed'>
                    <div className='px-1/4 h-max  mx-auto py-60 bg-[rgba(255,255,255,.7)]'>
                        <div className=' w-3/4 mx-auto'>
                        <h1 className='text-5xl text-blue-700 font-bold text-center py-5 [text-shadow:_.1px_.1px_1px_rgb(0_0_0)]'>Flooding</h1>
                        <div className='flex gap-16 justify-center'>
                            <p className='text-3xl w-3/4 mx-auto leading-[3.4rem] font-light [text-shadow:_.1px_.1px_1px_rgb(0_0_0)]' >
                                Our platform gives updates on flood hotspots on roads and river water levels in Mumbai. <br />
                                Using live data feeds, stay informed about flood conditions across different locations, helping you make smart decisions and stay safe. 
                                <br />
                                Join us in protecting communities and boosting flood preparedness with our dedicated flood monitoring services.
                            </p>
                            <span className='flex flex-col justify-center'>
                                <img className='border border-black' src='/img/index/s2.png' />
                            </span> 
                        </div>
                    </div>
                    </div>
                </div>

                <div className='w-3/4 mx-auto pt-60'>
                    <h1 className='text-5xl text-blue-700 font-bold text-center py-5'>CROWDSOURCING</h1>
                    <div className='flex gap-16 justify-center'>
                        <span className='flex flex-col justify-center w-1/2  h-full'>
                            <Map />
                        </span>
                        <p className='text-3xl font-light w-3/4 mx-auto leading-[3rem]' >
                            To help Mumbai adapt better to its persistent flood situation every monsoon, we have developed a crowd-sourced flood mapping platform (a web portal and an app) to disseminate near – real – time waterlogging information to Mumbaikars. <br/  > <br />
                            We aim to use data sourced from netizens on X (formerly Twitter). You can use hashtags #mumbairain and #mumbaiflooddata, and geotag yourself to report live incidents of flooding in your locality this upcoming monsoon. <br /><br />
                            Alternatively, fill this FORM to send us live waterlogging information from wherever you are. 

                        </p>
                    </div>
                </div>

                <div className='w-3/4 mx-auto pt-60' >
                    <h1 className='text-5xl text-blue-700 font-bold text-center py-5'>URBAN RESILIENCE</h1>
                    <div className='flex gap-16 justify-center'>
                        <p className='text-3xl font-light w-3/4 mx-auto leading-[3.4rem]' >
                            We have developed a Google Maps-based utility to map the efficiency of travelling to important critical facilities like schools and colleges, important stations, major hospitals and health centers during floods. <br /> <br />
                            This will help track the resilience of urban infrastructure to floods.
                        </p>
                        <span className='flex flex-col justify-center'>
                            <img className='border border-black' src='/img/index/s4.png' />
                        </span>
                    </div>
                </div>  

                <hr className='w-3/4 mx-auto my-40' />

                <div className='flex w-3/4 mx-auto justify-between'>
                    <h2 className='flex flex-col text-4xl justify-center'>FORM</h2>
                    <img src='img/index/vcgi_training.png' alt='VCGI Training' />
                </div>

            </section>
            <Footer />
        </div>
    )
}



export default Index;
