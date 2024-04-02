/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { getVisitor } from "../lib/helper";
import { getDate, getDay, getMonth, getYear, getTime } from "../lib/getDate";
import { resolve } from 'styled-jsx/css';
import { getLocation } from '@/lib/getLocation';
import { useCountUp } from 'react-countup';
const PageOne = () => {
    const countUpRefOne = useRef(null);
    const countUpRefTwo = useRef(null);

    const [isBtnClick, setIsBtnClick] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [visitor, setVisitor] = useState();
    const [count, setCount] = useState()

    const [location, setLocation] = useState(null)
    const [date, setDate] = useState([{
        currentDay: getDay(),
        currentDate: getDate(),
        currentMonth: getMonth(),
        currentYear: getYear(),
        currentTime: getTime(),
    }])
    function testHandler() {
        setIsClicked(!isClicked)
    }
    const { countUp: countUpOne, start: startOne, pauseResume: pauseResumeOne, reset: resetOne, update: updateOne } = useCountUp({
        ref: countUpRefOne,
        end: 10.00,
        duration: 5,
        startOnMount: false,
        decimals: 2,

        onEnd: () => {
            setIsBtnClick(false);
        }
    });

    const { countUp: countUpTwo, start: startTwo, pauseResume: pauseResumeTwo, reset: resetTwo, update: updateTwo } = useCountUp({
        ref: countUpRefTwo,
        end: 10.00, // Example end value for the second count-up
        duration: 5,
        startOnMount: false,
        decimals: 2,

        onEnd: () => {
            setIsBtnClick(false);
        }
    });

    // Then you can use these count-up animations in your UI as needed


    function countHandlerOne() {
        setIsBtnClick(true);
        startOne();
        setCount(countUpOne)

    }

    function countHandlerTwo() {
        setIsBtnClick(true);
        startTwo();
        setCount(countUpTwo)

    }

    useEffect(() => {
        const visitorData = JSON.parse(localStorage.getItem("visitor"));
        const loc = getLocation();
        loc.then(res => setLocation(res))
        if (visitorData === null) {
            let visitorAPI = getVisitor();
            visitorAPI.then(res => setVisitor(res));

        }
        else {
            setVisitor(visitorData);
        }



    }, [])

    return (
        <div className={` ${isClicked ? 'h-[130dvh] ' : 'h-[100dvh] '} sm:h-screen w-screen bg-black flex flex-col  justify-between overflow-hidden`}>
            {
            /* ************** other screen */}

            <header className='hidden sm:flex items-center justify-between lg:pt-4  xl:px-4  2xl:px-8 2xl:pt-5'>
                <img src="/assets/ZF-logo.svg" className='w-[50px] lg:w-[70px] 2xl:w-[97px] cursor-pointer' alt="" />
                <p className='text-[10px] xl:text-[17px] 2xl:text-[20px]  xl:tracking-[2px] text-[#ffff] uppercase bg-green-00 xl:mr-8 2xl:mr-0 '>Your internet Speed</p>
                <img src={visitor?.visitor_data.country.app_icon} className='w-[20px] lg:w-[40px] 2xl:w-[50px] ' alt="country-Flag" />
            </header>

            {/* **************Mobile screen */}

            <nav className='flex items-center justify-between pt-3 pb-5 ml-5 mr-5  sm:hidden'>
                {/* <img onClick={testHandler} src="/assets/arrow.svg" className={`w-[18px] ${!isClicked && 'opacity-0'} `} alt="" /> */}
                <img onClick={testHandler} src="/assets/arrow.svg" className={`w-[18px] ${isClicked ? 'opacity-100' : 'opacity-0'} `} alt="" />
                <img src="/assets/ZF-logo.svg" className='w-[48px] cursor-pointer' alt="" />
                <img src={visitor?.visitor_data.country.app_icon} className='w-[25px] lg:w-[30px] 2xl:w-[50px] ' alt="" />
            </nav>
            <div className={`block text-[#ffff] text-center ${isClicked ? 'block' : 'hidden'}  sm:hidden text-[12px] tracking-[1.5px] `}>
                <p className='uppercase'>more information</p>
            </div>
            <div className={`block text-[#ffff] text-center -mt-[190px] sm:hidden text-[12px] tracking-[1.5px]   ${!isClicked ? 'block' : 'hidden'}  `}>
                <p>YOUR INTERNET SPEED</p>
            </div>





            {/* **************Section for other screen */}

            {!isClicked ? <section className=' relative text-[rgb(255,255,255)] hidden lg:flex flex-col items-center self-end space-x-10 lg:space-x-5 mr-3   2xl:mr-8'>
                <div className='flex items-center space-x-3' >
                    <p className='text-[150px] lg:text-[250px] 2xl:text-[400px]' ref={countUpRefOne}> {count || 0.00}</p>
                    <div className='text-[22px] xl:text-[30px] 2xl:text-[60px] space-y-2 lg:space-y-5'>
                        <p>Mbps</p>
                        {
                            isBtnClick ? <button className=''><img src="/assets/ZIFI-Circle-Download-Green.svg" className='w-[34px] lg:w-[80px] 2xl:w-[130px] cursor-pointer' alt="" /></button> :
                                <div className='relative cursor-pointer' onClick={countHandlerOne} >
                                    <button className=' cursor-pointer'><img src="/assets/ZIFI Circle Test.svg" className='w-[34px] lg:w-[80px] 2xl:w-[130px] ' alt="" /></button>
                                    <p className='text-[#ffff] text-[25px] 2xl:text-[45px] absolute xl:top-5 xl:right-5 2xl:top-8 2xl:right-[50px] 3xl:top-7 3xl:right-[50px]'>GO</p>
                                </div>

                        }
                    </div>
                </div>

                <div>
                    <p onClick={testHandler} className={`absolute  uppercase xl:bottom-8 xl:right-0 2xl:bottom-20 2xl:right-1  text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#ffff] -mt-5 opacity-50 hover:opacity-100 hover:transition-all ease-in-out duration-50 tracking-[1.5px]`}>more information</p>
                </div>
            </section> : <section className=' flex flex-col-reverse lg:flex-row justify-between ' >
                <div className='ml-5 mr-5 py-5 lg:ml-4 lg:mr-5 lg:py-5 2xl:ml-8 2xl:mr-10 2xl:py-10 space-y-5 2xl:space-y-14 -mt-2 xl:-mt-10 2xl:-mt-28 3xl:-mt-64'>
                    <div className='hidden sm:block'>
                        <p className=' text-[14px] 2xl:text-[20px] text-[#ffff] opacity-50 tracking-[1.5px] uppercase mt-5'>more information</p>
                    </div>
                    <div onClick={testHandler} className='hidden sm:block cursor-pointer'>
                        <img src="/assets/Arrow-Back-W-Web.svg" className='w-[18px] lg:w-[25px] 2xl:w-[30px]' alt="" />
                    </div>

                    <div className='flex  justify-start  '>
                        <div className='flex items-center space-x-10 tracking-[1.5px] leading-[20px] xl:leading-[23px] 2xl:leading-[40px]'>
                            <div className='space-y-5 sm:space-y-10 xl:space-y-5 3xl:space-y-14'>
                                <div className='flex items-center space-x-5 2xl:space-x-12'>
                                    <div>
                                        <img src={visitor?.visitor_data.country.app_icon} className='w-[25px] lg:w-[30px] 2xl:w-[50px] ' alt="" />
                                    </div>
                                    <div className='flex items-center space-x-20 xl:space-x-[85px] 2xl:space-x-[120px]'>
                                        <div className='text-[10px] lg:text-[14px] 2xl:text-[20px] text-[#ffff] opacity-50'>
                                            <p>CITY</p>
                                            <p>COUNTRY</p>

                                        </div>
                                        <div className='text-[10px] lg:text-[14px] 2xl:text-[20px] text-[#ffff] uppercase'>
                                            <p>{visitor?.visitor_data.cityName} </p>
                                            <p>{visitor?.visitor_data.country.name}</p>
                                        </div>
                                    </div>

                                </div>


                                <div className='flex space-x-6 xl:space-x-5 2xl:space-x-14 items-center'>
                                    <div>
                                        <img src="/assets/ZIFI-User-Icon.svg" className='w-[22px] lg:w-[30px] 2xl:w-[43px] ' alt="" />
                                    </div>
                                    <div className='flex items-center space-x-[52px] xl:space-x-12 2xl:space-x-[68px]'>
                                        <div className='text-[10px] lg:text-[14px] 2xl:text-[20px] text-[#ffff] opacity-50'>
                                            <p>LATITUDE</p>
                                            <p>LONGITUDE</p>
                                            <p>INTERNAL IP</p>
                                            <p>EXTERNAL IP</p>
                                            <p>MAC ADDRESS</p>
                                        </div>
                                        {/*  */}
                                        <div className='text-[10px] lg:text-[14px] 2xl:text-[20px] text-[#ffff]'>
                                            <p>{location?.latitude}</p>
                                            <p>{location?.longitude}</p>
                                            <p>10.0.0.186</p>
                                            <p>82.41.174.63</p>
                                            <p>5D:C3:07:7A:C4:88</p>
                                        </div>
                                    </div>

                                </div>


                                <div className='flex items-center space-x-6 xl:space-x-5 2xl:space-x-14'>
                                    <div>
                                        <img src="/assets/ZIFI-WiFi-Ico-W.svg" className='w-[22px] lg:w-[30px] 2xl:w-[43px] ' alt="" />
                                    </div>
                                    <div className='flex items-center space-x-[52px] xl:space-x-[50px] 2xl:space-x-[70px]'>
                                        <div className='text-[10px] lg:text-[14px] 2xl:text-[20px] text-[#ffff] opacity-50'>
                                            <div >
                                                <p>PROVIDER</p>
                                                <p>ROUTER NAME</p>
                                                <p>SERVER</p>
                                                <p>PING</p>
                                            </div>
                                        </div>
                                        <div className='text-[10px] lg:text-[14px] 2xl:text-[20px] text-[#ffff]'>
                                            <p>VIRGIN MEDIA</p>
                                            <p>TP LINK</p>
                                            <p>LONDON</p>
                                            <p>12 ms</p>
                                        </div>
                                    </div>

                                </div>

                                <div className='flex items-center space-x-[46px] xl:space-x-[50px] 2xl:space-x-[100px]'>
                                    <div>
                                        {/* <img src="/assets/wifi.svg" className='w-[20px] lg:w-[30px] 2xl:w-[43px] ' alt="" /> */}
                                    </div>
                                    <div className='flex items-center space-x-[110px]  xl:space-x-[125px] 2xl:space-x-[170px]'>
                                        <div className='text-[10px] lg:text-[14px] 2xl:text-[20px] text-[#ffff] opacity-50'>
                                            <p>DATE</p>
                                            <p>TIME</p>

                                        </div>
                                        <div className='text-[10px] lg:text-[14px] 2xl:text-[20px] text-[#ffff]'>
                                            <p>27/03/2024</p>
                                            <p>15:45</p>

                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>



                    </div >
                </div>
                <div style={{ zIndex: 1 }} className='relative flex flex-col items-center sm:items-end ml-5 mr-5  lg:ml-5 lg:mr-5 text-white  2xl:ml-10 2xl:mr-10 2xl:mt-10 3xl:-mt-32'>
                    <div className='flex flex-col items-center sm:items-end -space-y-10'>
                        <div className='flex flex-col sm:flex-row items-center space-x-3'>
                            <p className='text-[70px] lg:text-[120px] 2xl:text-[180px] 3xl:text-[220px]'>175.31</p>
                            <div className='sm:hidden'><p className='text-[10px] xl:text-[16px] -mt-3 lg:mt-0 tracking-[3px] '>DOWNLOAD</p></div>

                            <div className='flex items-center sm:block text-[25px] xl:text-[16px]  2xl:text-[20px] space-x-2 sm:space-x-0 sm:space-y-2 lg:space-y-5'>
                                <button onClick={'testHandler'} className='block sm:hidden cursor-pointer '>
                                    <img src="/assets/ZIFI-Arrow-Green.svg" className=' w-[23px] xl:w-[30px] 3xl:w-[43px] ' alt="" />
                                </button>
                                <p>Mbps</p>
                                <button onClick={'testHandler'} className='hidden sm:block cursor-pointer '>
                                    <img src="/assets/ZIFI-Arrow-Green.svg" className=' w-[23px] xl:w-[30px] 3xl:w-[43px]' alt="" />
                                </button>
                            </div>

                        </div>
                        <div className='hidden sm:block'><p className='text-[10px] xl:text-[16px] mt-5 lg:mt-0 tracking-[3px]'>DOWNLOAD</p></div>
                    </div>

                    <div className='flex flex-col items-center sm:items-end -space-y-10 '>
                        <div className='flex flex-col sm:flex-row items-center space-x-3'>
                            <p className='text-[70px] lg:text-[120px] 2xl:text-[180px] 3xl:text-[220px]'>52.97</p>
                            <div className='sm:hidden'><p className='text-[10px] xl:text-[16px] -mt-3 lg:mt-0 tracking-[3px]'>UPLOAD</p></div>

                            <div className='flex items-center sm:block text-[25px] xl:text-[16px]  2xl:text-[20px] space-x-2 sm:space-x-0 sm:space-y-2 lg:space-y-5'>
                                <button onClick={'testHandler'} className='block sm:hidden cursor-pointer '>
                                    <img src="/assets/ZIFI-Upload-Arrow-Purple.svg" className=' w-[23px] xl:w-[30px] 3xl:w-[43px] ' alt="" />
                                </button>
                                <p>Mbps</p>
                                <button onClick={'testHandler'} className='hidden sm:block cursor-pointer '>
                                    <img src="/assets/ZIFI-Upload-Arrow-Purple.svg" className=' w-[23px] xl:w-[30px] 3xl:w-[43px] ' alt="" />
                                </button>
                            </div>

                        </div>
                        <div className='hidden sm:block'><p className='text-[10px] xl:text-[16px] mt-5 lg:mt-0 tracking-[3px]'>UPLOAD</p></div>
                    </div>

                    <div className='hidden lg:block opacity-20 absolute xl:top-5 xl:right-0 2xl:top-36 2xl:right-0 3xl:top-36 3xl:right-0' >
                        {/* <p className='xl:text-[280px] 2xl:text-[324px] 3xl:text-[430px] text-white opacity-10 3xl:tracking-[10px] font-smibold'>175.31</p> */}
                        <div className='flex items-center space-x-3'>
                            <p className='text-[150px] xl:text-[300px] 3xl:text-[400px]'>175.31</p>
                            <div className='text-[22px] xl:text-[40px] 3xl:text-[60px] space-y-2 lg:space-y-5'>
                                <p>Mbps</p>
                                {
                                    <div className='relative' >
                                        <button disabled className=' '><img src="/assets/ZIFI Circle Test.svg" className='w-[34px] lg:w-[80px] 2xl:w-[130px] ' alt="" /></button>
                                        <p className='text-[#ffff] text-[25px] xl:text-[20px] 2xl:text-[40px]  tracking-[2px] absolute xl:top-6 xl:right-10 2xl:top-5 2xl:right-[20px] 3xl:top-8 3xl:right-[50px]'>GO</p>
                                    </div>

                                }
                            </div>
                        </div>
                        <div>
                            <p className='absolute uppercase xl:bottom-16 xl:right-0 2xl:bottom-0 2xl:right-1  text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#ffff]  opacity-50  tracking-[1.5px]'>more information</p>
                        </div>
                    </div>
                </div>
            </section >
            }


            {/* **************Section for Mobile screen */}

            {!isClicked && <section className=' text-[#ffff] lg:hidden flex justify-center items-start -mt-72 '>
                <div className='flex flex-col  items-center mt-16'>

                    <div className='flex flex-col items-center  '>
                        <span className='text-[120px] -mb-8  ' ref={countUpRefTwo}> {count || 0.00}</span>
                        <span className='text-[30px]'>Mbps</span>
                    </div>

                    <div>
                        {<div onClick={testHandler} className='mt-10 tracking-[2px]'>
                            <p className='uppercase text-[#ffff] text-[12px] opacity-70'>more information</p>
                        </div>}
                    </div>


                    <div className=''>
                        {
                            isBtnClick ? <button onClick={testHandler} className='cursor-pointer'><img src="/assets/ZIFI-Circle-Download-Green.svg" className='w-[80px]  mt-10' alt="" /></button> :
                                <div className='relative' onClick={countHandlerTwo} >
                                    <button className=' cursor-pointer'><img src="/assets/ZIFI Circle Test.svg" className='w-[80px]  mt-10' alt="" /></button>
                                    <p className='text-[#ffff] text-[25px]  absolute top-[63px] right-[23px]'>GO</p>
                                </div>

                        }
                    </div>
                </div>


            </section>
            }
            {/* **************Footer for Other screen */}

            <footer className='hidden sm:flex items-center justify-between ml-5 mr-5 py-1 lg:ml-5 lg:mr-5 lg:py-5 2xl:ml-10 2xl:mr-10 2xl:pb-5'>
                <div>
                    <a href="https://zimomeet.com/"> <img src="/assets/ZIG-ZIMO-GROUP-W.svg" className='w-[80px] lg:w-[135px] 2xl:w-[148px]' alt="" />
                    </a>
                </div>
                <div className='flex items-center space-x-5 xl:space-x-14 2xl:space-x-10'>
                    <a href="https://zitransfer.com/"> <img src="/assets/ZTFR-w.svg" className='w-[60px] lg:w-[90px] 2xl:w-[103px]' alt="" /></a>
                    <a href="https://zimomeet.com/">  <img src="/assets/ZIMO-MEET-masked-W.svg" className='w-[40px] lg:w-[80px] 2xl:w-[79px]' alt="" /></a>
                </div>
            </footer>

            {/* Mobile screen */}
            {

                !isClicked ? <footer className='flex items-center justify-between px-5 pb-3 -mt-48   sm:hidden'>
                    <a href="https://zitransfer.com/"><img src="/assets/ZTFR-w.svg" className=' w-[59px] cursor-pointer' alt="" /></a>

                    <a href="https://zimomeet.com/"> <img src="/assets/ZIG-ZIMO-GROUP-W.svg" className='w-[84px] cursor-pointer' alt="" />
                    </a>

                    <a href="https://zimomeet.com/"> <img src="/assets/ZIMO-MEET-masked-W.svg" className='w-[45px] cursor-pointer' alt="" /></a>
                </footer> : <footer className='flex items-center justify-between px-5 pb-3  sm:hidden'>
                    <a href="https://zitransfer.com/"><img src="/assets/ZTFR-w.svg" className=' w-[59px] cursor-pointer' alt="" /></a>

                    <a href="https://zimomeet.com/"> <img src="/assets/ZIG-ZIMO-GROUP-W.svg" className='w-[84px] cursor-pointer' alt="" />
                    </a>

                    <a href="https://zimomeet.com/"> <img src="/assets/ZIMO-MEET-masked-W.svg" className='w-[45px] cursor-pointer' alt="" /></a>
                </footer>

            }
        </div>
    )
}

export default PageOne