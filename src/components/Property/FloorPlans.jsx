import React from 'react'
import floor from '../../assets/Floor.png'
const FloorPlans = () => {
  return (
    <div className=' w-full h-full bg-[#ffffff] px-5 md:px-10 lg:px-20 mt-20 mb-40 md:mb-20 '>
          <div >
            <h1 className='text-[40px] text-[#080808] font-semibold bg-[#]'>Floor Plans </h1>
          </div>
          <div className='relative'>
          <div className='w-full md:h-[650px] h-full bg-[#0c385d]'>
            <img src={floor} className='w-full h-full object-cover' />
            </div>
            <div className='absolute md:w-1/3 w-full rounded-2xl p-4 -bottom-24 md:bottom-0 right-0 bg-[#0c385d]'>
                       <p className='text-[12px] text-white'>Description: Plan description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
        
          </div>
    </div>
  )
}

export default FloorPlans