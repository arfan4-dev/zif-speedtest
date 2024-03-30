/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getVisitor } from "../lib/helper";
import { getDate, getDay, getMonth, getYear, getTime } from "../lib/getDate";
const PageOne = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [visitor, setVisitor] = useState();
    const [count, setCount] = useState(0);
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
    function countHandler() {
        setCount(prevCount => prevCount + 1)
    }
    useEffect(() => {
        const visitorData = JSON.parse(localStorage.getItem("visitor"));
        console.log(visitorData)
        if (visitorData === null) {
            getVisitor();
        }
        else {
            setVisitor(visitorData)
        }
        setInterval(() => {
            Promise.all([getDate(), getMonth(), getDay(), getYear(), getTime()])
                .then(values => {
                    const [currentDate, currentMonth, currentYear, currentDay, currentTime] = values;
                    setDate({ ...date, currentDay, currentDate, currentMonth, currentYear, currentTime });
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }, 2000)
    }, [date])
    return (
        <div className='min-h-screen bg-black flex flex-col  justify-between'>
            <nav className='hidden sm:flex items-center justify-between ml-5 mr-5 py-5 lg:ml-5 lg:mr-5 lg:py-5 2xl:ml-10 2xl:mr-10 2xl:py-10 '>
                <img src="/assets/ZF-logo.svg" className='w-[50px] lg:w-[70px] 2xl:w-[97px] cursor-pointer' alt="" />
                <p className='text-[10px] xl:text-[16px] tracking-[1.5px] text-[#ffff] uppercase '>Your internet Speed</p>
                <img src={visitor?.visitor_data.country.app_icon} className='w-[20px] lg:w-[30px] 2xl:w-[50px] ' alt="country-Flag" />
            </nav>

            {/* **************Mobile screen */}
            <nav className='flex items-center justify-between ml-5 mr-5 py-5 lg:ml-5 lg:mr-5 lg:py-5 2xl:ml-10 2xl:mr-10 2xl:py-10 lg:hidden'>
                <p className='text-[10px] xl:text-[16px] tracking-[1.5px] text-black uppercase none  '>Your</p>
                <img src="/assets/ZF-logo.svg" className='w-[48px] cursor-pointer' alt="" />
                <img src={visitor?.visitor_data.country.app_icon} className='w-[20px] lg:w-[30px] 2xl:w-[50px] ' alt="" />
            </nav>
            <div className='block text-[#ffff] text-center -mt-10 sm:hidden text-[12px] tracking-[1.5px]'>
                <p>YOUR INTERNET SPEED</p>
            </div>
            <section className=' relative text-[rgb(255,255,255)] hidden lg:flex flex-col items-center self-end space-x-10 lg:space-x-5 mr-5  2xl:mr-10'>
                <div className='flex items-center space-x-3'>
                    <p className='text-[150px] lg:text-[250px] 2xl:text-[400px]'>175.31</p>
                    <div className='text-[22px] xl:text-[30px] 2xl:text-[60px] space-y-2 lg:space-y-5'>
                        <p>Mbps</p>
                        {
                            isClicked ? <button onClick={testHandler} className='cursor-pointer'><img src="/assets/ZIFI-Circle-Download-Green.svg" className='w-[34px] lg:w-[80px] 2xl:w-[130px] ' alt="" /></button> :
                                <div className='relative' onClick={testHandler} >
                                    <button className=' cursor-pointer'><img src="/assets/ZIFI Circle Test.svg" className='w-[34px] lg:w-[80px] 2xl:w-[130px] ' alt="" /></button>
                                    <p className='text-[#ffff] text-[25px] 2xl:text-[45px] absolute xl:top-5 xl:right-5 2xl:top-8 2xl:right-[50px] 3xl:top-7 3xl:right-[50px]'>GO</p>
                                </div>

                        }
                    </div>
                </div>

                <div>
                    {1 > 0 ? <Link href='/internet-speed-info'><p className='absolute xl:bottom-8 xl:right-8 2xl:bottom-10 2xl:right-16  text-[14px] lg:text-[20px] text-[#ffff] -mt-5 opacity-50 hover:opacity-100 hover:transition-all ease-in-out duration-50 tracking-[1.5px]'>more information</p> </Link> : <p></p>}
                </div>
            </section>

            <section className=' text-[#ffff] lg:hidden flex justify-center items-start -mt-28 '>
                <div className='flex flex-col  items-center mt-16'>

                    <div className='flex flex-col items-center  '>
                        <span className='text-[120px] -mb-8  '>0</span>
                        <span className='text-[30px]'>Mbps</span>
                    </div>

                    <div>
                        {1 > 0 ? <Link href='/internet-speed-info'><div className='mt-10 tracking-[2px]'>
                            <p className='uppercase text-[#ffff] text-[12px] opacity-70'>more information</p>
                        </div> </Link> : <p></p>}
                    </div>


                    <div className=''>
                        {
                            isClicked ? <button onClick={testHandler} className='cursor-pointer'><img src="/assets/ZIFI-Circle-Download-Green.svg" className='w-[80px] lg:w-[80px] 2xl:w-[130px] mt-10' alt="" /></button> :
                                <div className='relative' onClick={testHandler} >
                                    <button className=' cursor-pointer'><img src="/assets/ZIFI Circle Test.svg" className='w-[80px] lg:w-[80px] 2xl:w-[130px] mt-10' alt="" /></button>
                                    <p className='text-[#ffff] text-[25px] 2xl:text-[45px] absolute top-[63px] right-6 xl:top-5 xl:right-5 2xl:top-7 2xl:right-12'>GO</p>
                                </div>

                        }
                    </div>
                </div>


            </section>

            {/* **************Footer for Mobile screen */}

            <footer className='hidden sm:flex items-center justify-between ml-5 mr-5 py-1 lg:ml-5 lg:mr-5 lg:py-5 2xl:ml-10 2xl:mr-10 2xl:py-10'>
                <div>
                    <img src="/assets/ZIG-ZIMO-GROUP-W.svg" className='w-[80px] lg:w-[120px] 2xl:w-[148px]' alt="" />

                </div>
                <div className='flex items-center space-x-5 lg:space-x-10'>
                    <img src="/assets/ZTFR-W.svg" className='w-[60px] lg:w-[70px] 2xl:w-[103px]' alt="" />
                    <img src="/assets/ZIMO-MEET-masked-W.svg" className='w-[40px] lg:w-[60px] 2xl:w-[79px]' alt="" />
                </div>
            </footer>
            <footer className='flex items-center justify-between ml-5 mr-5 py-5 lg:ml-5 lg:mr-5 lg:py-5 2xl:ml-10 2xl:mr-10 2xl:py-10 sm:hidden'>

                <img src="/assets/ZTFR-w.svg" className='w-[59px] cursor-pointer' alt="" />
                <img src="/assets/ZIG-ZIMO-GROUP-W.svg" className='w-[84px] cursor-pointer' alt="" />
                <img src="/assets/ZIMO-MEET-masked-W.svg" className='w-[45px] cursor-pointer' alt="" />
            </footer>
        </div>
    )
}

export default PageOne