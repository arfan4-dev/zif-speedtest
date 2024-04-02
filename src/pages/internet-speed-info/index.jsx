/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getVisitor } from "../../lib/helper";
import { getDate, getDay, getMonth, getYear, getTime } from "../../lib/getDate";
const PageTwo = () => {
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
    useEffect(() => {
        const visitorData = JSON.parse(localStorage.getItem("visitor"));
        console.log(visitorData)
        if (visitorData === null) {
            let visitorAPI = getVisitor();
            console.log("API call")
            visitorAPI.then(res => setVisitor(res));

        }
        else {
            setVisitor(visitorData)
        }
        // setInterval(() => {
        //     Promise.all([getDate(), getMonth(), getDay(), getYear(), getTime()])
        //         .then(values => {
        //             const [currentDate, currentMonth, currentYear, currentDay, currentTime] = values;
        //             setDate({ ...date, currentDay, currentDate, currentMonth, currentYear, currentTime });
        //         })
        //         .catch(error => {
        //             console.error("Error:", error);
        //         });
        // }, 2000)
    }, [])
    return (
        <div className='min-h-screen bg-black flex flex-col  justify-between'>

            {/* <nav className='lg:ml-5 lg:mr-5 lg:py-5 2xl:ml-10 2xl:mr-10 2xl:py-10 '>
                <div className='mx-auto hidden sm:flex items-center justify-between'>
                    <img src="/assets/ZiFi-W.svg" className='w-[50px] lg:w-[70px] 2xl:w-[97px] ' alt="" />
                    <p className='text-[10px] xl:text-[16px] tracking-[4px] text-[#ffff] uppercase'>Your INTERNET Speed</p>
                    <img src={visitor?.visitor_data.country.app_icon} className='w-[20px] lg:w-[40px] 2xl:w-[50px] ' alt="" />
                </div>


            </nav> */}

            {/* **************Mobile screen */}
            {/* <nav className='flex items-center justify-between pt-3 pb-5 ml-5 mr-5  lg:hidden'>
                <Link href='/'> <img src="/assets/arrow.svg" className='w-[18px] ' alt="" /></Link>

                <img src="/assets/ZF-logo.svg" className='w-[48px] cursor-pointer' alt="" />
                <img src={visitor?.visitor_data.country.app_icon} className='w-[25px] lg:w-[30px] 2xl:w-[50px] ' alt="" />
            </nav>
            <div className='block text-[#ffff] text-center  sm:hidden text-[12px] tracking-[1.5px] '>
                <p className='uppercase'>more information</p>
            </div> */}


            {/* <section className=' flex flex-col-reverse lg:flex-row justify-between ' >
                <div className='ml-5 mr-5 py-5 lg:ml-5 lg:mr-5 lg:py-5 2xl:ml-10 2xl:mr-10 2xl:py-10 space-y-5 2xl:space-y-14 -mt-2 xl:-mt-10 2xl:-mt-28 3xl:-mt-64'>
                    <div className='hidden sm:block'>
                        <p className=' text-[14px] 2xl:text-[20px] text-[#ffff] opacity-50 tracking-[1.5px] uppercase mt-5'>more information</p>
                    </div>
                    <div className='hidden sm:block'>
                        <Link href='/'> <img src="/assets/Arrow-Back-W-Web.svg" className='w-[18px] lg:w-[25px] 2xl:w-[30px]' alt="" /></Link>
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
                                       
                                        <div className='text-[10px] lg:text-[14px] 2xl:text-[20px] text-[#ffff]'>
                                            <p>51.514882</p>
                                            <p>-0.123563</p>
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
                        <div className='flex items-center space-x-3'>
                            <p className='text-[150px] xl:text-[300px] 3xl:text-[400px]'>175.31</p>
                            <div className='text-[22px] xl:text-[40px] 3xl:text-[60px] space-y-2 lg:space-y-5'>
                                <p>Mbps</p>
                                {
                                    isClicked ? <button onClick={`testHandler`} className='cursor-pointer'><img src="/assets/ZIFI-Circle-Download-Green.svg" className='w-[34px] lg:w-[80px] 2xl:w-[130px] ' alt="" /></button> :
                                        <div className='relative' onClick={`testHandler`} >
                                            <button className=' cursor-pointer'><img src="/assets/ZIFI Circle Test.svg" className='w-[34px] lg:w-[80px] 2xl:w-[130px] ' alt="" /></button>
                                            <p className='text-[#ffff] text-[25px] xl:text-[20px] 2xl:text-[40px]  tracking-[2px] absolute xl:top-6 xl:right-10 2xl:top-5 2xl:right-[20px] 3xl:top-8 3xl:right-[50px]'>GO</p>
                                        </div>

                                }
                            </div>
                        </div>
                        <div>
                            <p className='absolute uppercase xl:bottom-16 xl:right-0 2xl:bottom-0 2xl:right-1  text-[14px] xl:text-[16px] 2xl:text-[20px] text-[#ffff]  opacity-50 hover:opacity-100 hover:transition-all ease-in-out duration-50 tracking-[1.5px]'>more information</p>
                        </div>
                    </div>
                </div>





            </section > */}

            {/* 
            <footer className='hidden sm:flex items-center justify-between ml-5 mr-5 py-1 lg:ml-5 lg:mr-5 lg:py-5 2xl:ml-10 2xl:mr-10 2xl:py-10'>
                <div>
                    <a href="https://zimogroup.org"> <img src="/assets/ZIG-ZIMO-GROUP-W.svg" className='w-[80px] lg:w-[120px] 2xl:w-[148px]' alt="" />
                    </a>

                </div>
                <div className='flex items-center space-x-5 lg:space-x-10'>
                    <a href="https://zitransfer.com/"> <img src="/assets/ZTFR-w.svg" className='w-[60px] lg:w-[70px] 2xl:w-[103px]' alt="" />
                    </a>
                    <a href="https://zimomeet.com/"> <img src="/assets/ZIMO-MEET-masked-W.svg" className='w-[40px] lg:w-[60px] 2xl:w-[79px]' alt="" />
                    </a>
                </div>
            </footer>
            <footer className='flex items-center justify-between ml-5 mr-5 py-5 lg:ml-5 lg:mr-5 lg:py-5 2xl:ml-10 2xl:mr-10 2xl:py-10 sm:hidden'>

                <a href="https://zitransfer.com/"> <img src="/assets/ZTFR-w.svg" className='w-[59px] cursor-pointer' alt="" /></a>
                <a href="https://zimogroup.org"> <img src="/assets/ZIG-ZIMO-GROUP-W.svg" className='w-[84px] cursor-pointer' alt="" /></a>
                <a href="https://zimomeet.com/">                <img src="/assets/ZIMO-MEET-masked-W.svg" className='w-[45px] cursor-pointer' alt="" />
                </a>
            </footer> */}
        </div >
    )
}

export default PageTwo