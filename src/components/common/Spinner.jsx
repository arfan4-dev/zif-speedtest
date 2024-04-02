/* eslint-disable @next/next/no-img-element */
export function Spinner() {
    return (
        <div className='bg-black opacity-50 h-screen w-screen'>
            <div className='flex items-center flex-col h-screen justify-center'>
                <img src='/assets/ZF-logo.svg' className="w-20 lg:w-60 animate-pulse" alt='' />

            </div>
        </div>
    )
}