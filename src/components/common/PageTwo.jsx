/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PageTwo = () => {
    return (
        <div className='min-h-screen bg-black flex flex-col  justify-between'>
            <nav className='flex items-center justify-between ml-5 mr-5 py-5 lg:ml-5 lg:mr-5 lg:py-5 2xl:ml-10 2xl:mr-10 2xl:py-10 '>
                <img src="/assets/ZF-logo.svg" className='w-[50px] lg:w-[70px] 2xl:w-[97px] ' alt="" />
                <p className='text-[10px] xl:text-[16px] tracking-[1.5px] text-[#ffff] uppercase'>Your INTERNET Speed</p>
                <img src="/assets/flag.svg" className='w-[20px] lg:w-[30px] 2xl:w-[50px] ' alt="" />
            </nav>

            <section className='flex flex-col-reverse lg:flex-row justify-between '>
                <div className='ml-5 mr-5 py-5 lg:ml-5 lg:mr-5 lg:py-5 2xl:ml-10 2xl:mr-10 2xl:py-10 space-y-5 2xl:space-y-14 -mt-2 xl:mt-0 2xl:-mt-36'>
                    <div >
                        <p className='text-[14px] 2xl:text-[20px] text-[#ffff] opacity-50'>more information</p>
                    </div>
                    <div>
                        <img src="/assets/arrow.svg" className='w-[18px] lg:w-[25px] 2xl:w-[30px]' alt="" />
                    </div>

                    <div className='flex  justify-start  '>
                        <div className='flex items-center space-x-10'>
                            <div className='space-y-10 xl:space-y-5'>
                                <div className='flex items-center space-x-5 2xl:space-x-12'>
                                    <div>
                                        <img src="/assets/flag.svg" className='w-[20px] lg:w-[30px] 2xl:w-[50px] ' alt="" />
                                    </div>
                                    <div className='flex items-center space-x-20 2xl:space-x-28'>
                                        <div className='text-[14px] 2xl:text-[20px] text-[#ffff] opacity-50'>
                                            <p>CITY</p>
                                            <p>COUNTRY</p>

                                        </div>
                                        <div className='text-[14px] 2xl:text-[20px] text-[#ffff]'>
                                            <p>LONDON</p>
                                            <p>UNITED KINGDOM</p>
                                        </div>
                                    </div>

                                </div>


                                <div className='flex space-x-5 2xl:space-x-14 items-center'>
                                    <div>
                                        <img src="/assets/person.svg" className='w-[20px] lg:w-[30px] 2xl:w-[43px] ' alt="" />
                                    </div>
                                    <div className='flex items-center space-x-12 2xl:space-x-[68px]'>
                                        <div className='text-[14px] 2xl:text-[20px] text-[#ffff] opacity-50'>
                                            <p>LATITUDE</p>
                                            <p>LONGITUDE</p>
                                            <p>INTERNAL IP</p>
                                            <p>EXTERNAL IP</p>
                                            <p>MAC ADDRESS</p>
                                        </div>
                                        {/*  */}
                                        <div className='text-[14px] 2xl:text-[20px] text-[#ffff]'>
                                            <p>51.514882</p>
                                            <p>-0.123563</p>
                                            <p>10.0.0.186</p>
                                            <p>82.41.174.63</p>
                                            <p>5D:C3:07:7A:C4:88</p>
                                        </div>
                                    </div>

                                </div>


                                <div className='flex items-center space-x-5 2xl:space-x-14'>
                                    <div>
                                        <img src="/assets/wifi.svg" className='w-[20px] lg:w-[30px] 2xl:w-[43px] ' alt="" />
                                    </div>
                                    <div className='flex items-center space-x-[53px] 2xl:space-x-[70px]'>
                                        <div className='text-[14px] 2xl:text-[20px] text-[#ffff]'>
                                            <div className='text-[14px] 2xl:text-[20px] text-[#ffff] opacity-50'>
                                                <p>PROVIDER</p>
                                                <p>ROUTER NAME</p>
                                                <p>SERVER</p>
                                                <p>PING</p>
                                            </div>
                                        </div>
                                        <div className='text-[14px] 2xl:text-[20px] text-[#ffff]'>
                                            <p>VIRGIN MEDIA</p>
                                            <p>TP LINK</p>
                                            <p>LONDON</p>
                                            <p>12 ms</p>
                                        </div>
                                    </div>

                                </div>

                                <div className='flex items-center space-x-[40px] xl:space-x-[53px] 2xl:space-x-[100px]'>
                                    <div>
                                        {/* <img src="/assets/wifi.svg" className='w-[20px] lg:w-[30px] 2xl:w-[43px] ' alt="" /> */}
                                    </div>
                                    <div className='flex items-center space-x-[115px]  xl:space-x-28 2xl:space-x-[160px]'>
                                        <div className='text-[14px] 2xl:text-[20px] text-[#ffff] opacity-50'>
                                            <p>DATE</p>
                                            <p>TIME</p>

                                        </div>
                                        <div className='text-[14px] 2xl:text-[20px] text-[#ffff]'>
                                            <p>27/03/2024</p>
                                            <p>15:45</p>

                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>



                    </div >
                </div>
                <div className='flex flex-col items-end ml-5 mr-5  lg:ml-5 lg:mr-5 text-white  2xl:ml-10 2xl:mr-10 '>
                    <div className='flex flex-col items-end -space-y-10'>
                        <div className='flex items-center space-x-3'>
                            <p className='text-[80px] lg:text-[150px] 2xl:text-[180px]'>175.53</p>
                            <div className='text-[20px] xl:text-[16px]  2xl:text-[20px] space-y-2 lg:space-y-5'>
                                <p>Mbps</p>
                                <button onClick={'testHandler'} className='cursor-pointer '>
                                    <img src="/assets/download.svg" className=' w-[23px] lg:w-[43px] ' alt="" />
                                </button>
                            </div>
                        </div>
                        <div><p className='text-[10px] xl:text-[16px] mt-5 lg:mt-0'>DOWNLOAD</p></div>
                    </div>

                    <div className='flex flex-col items-end -space-y-10'>
                        <div className='flex items-center space-x-3'>
                            <p className='text-[80px] lg:text-[150px] 2xl:text-[180px]'>52.92</p>
                            <div className='text-[20px] xl:text-[16px]  2xl:text-[20px] space-y-2 lg:space-y-5'>
                                <p>Mbps</p>
                                <button onClick={'testHandler'} className='cursor-pointer rotate-180 '><img src="/assets/blueArrow.svg" className='w-[20px] lg:w-[43px] ' alt="" /></button>
                            </div>
                        </div>
                        <div><p className='text-[10px] xl:text-[16px] mt-5 lg:mt-0'>UPLOAD</p></div>
                    </div>
                </div>




            </section >
            <footer className='flex items-center justify-between ml-5 mr-5 py-5 lg:ml-5 lg:mr-5 lg:py-5 2xl:ml-10 2xl:mr-10 2xl:py-10'>
                <div>
                    <img src="/assets/Zima-logo.svg" className='w-[80px] lg:w-[120px] 2xl:w-[148px]' alt="" />

                </div>
                <div className='flex items-center space-x-5 lg:space-x-10'>
                    <img src="/assets/ZTFR.svg" className='w-[60px] lg:w-[80px] 2xl:w-[103px]' alt="" />
                    <img src="/assets/z-camera.svg" className='w-[40px] lg:w-[60px] 2xl:w-[79px]' alt="" />
                </div>
            </footer>
        </div >
    )
}

export default PageTwo