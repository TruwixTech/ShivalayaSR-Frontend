import React from 'react'

const Stats = () => {
    return (
        <div className='w-full h-screen px-5  py-20 md:px-10 lg:px-20'>

            <div className='w-full md:h-[215px] flex  flex-col md:flex-row gap-20 items-center justify-center bg-[#ca4d2f] rounded-xl py-20 px-10'>

                <div className='flex  flex-col  text-white gap-2'>
                    <h1 className='text-[40px] font-playflair]'>Take a look at our numbers</h1>
                   
                </div>
                <div className='flex gap-6 flex-wrap justify-center sm:justify-start'>
                    <div className='flex flex-col text-white'>
                        <span className='text-[40px] font-playflair'>90%</span>
                        <span>Customer Satisfaction</span>

                    </div>
                    <div className='flex flex-col text-white'>
                        <span className='text-[40px] font-playflair'>50M+</span>
                        <span>Customer Satisfaction</span>
                    </div>

                    <div className='flex flex-col text-white'>
                        <span className='text-[40px] font-playflair'>2,600+</span>
                        <span>Sucessful Sales</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stats;