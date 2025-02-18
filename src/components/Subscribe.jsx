import React from 'react'
import tele from '../assets/mail2.png'
import { FaArrowRightLong } from "react-icons/fa6";
const Subscribe = () => {
    return (
        <div className='w-full h-[#489.5px] bg-[#eeeeee] text-white px-5 md:px-10 lg:px-20'>
            <div className='flex flex-col items-center justify-center pt-14 gap-4'>
                <div className='w-[61px] h-[61px]'>
                    <img src={tele} className='w-full h-full object-cover' />
                </div>
                <div>

                    <h1 className='text-2xl text-[#0C385D] font-playflair'>Stay Up to Date</h1>
                </div>
                <div>
                   <h1 className='text-[15px] text-[#080808] font-playflair'>Subscribe to our newsletter to receive our weekly feed.</h1>
                </div>
                <div className='md:w-[570px] border-2 rounded-full flex bg-[#ffffff] mb-4 '>
                    <div className='w-full md:w-[80%]'>
                    <input type="Your email" placeholder='Your email' className=' p-2 outline-none rounded-full text-[#818181]'/>
    
                    </div>
                   <div className='w-full md:w-[20%]'>
                   <button className= ' bg-[#0c385d] px-4 py-2 ml-4  rounded-full flex items-center gap-2 '>Send <FaArrowRightLong /></button>
                    
                   </div>
                 
                </div>

            </div>
        </div>
    )
}

export default Subscribe