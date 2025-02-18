import React from 'react'
import first from '../../assets/Property1.jpeg'
import second from '../../assets/Property2.jpeg'
import third from '../../assets/Property3.jpeg'
import { BsBuilding } from "react-icons/bs";
const PropertyHero = () => {
  return (
    <div className='w-full h-full bg-[#eeeeee]'>
      <h1 className='text-3xl md:text-[56px] text-[#0C385D] font-semi-bold mx-4'>LUXURY CONDOMINUS</h1>
      <div className="flex flex-col md:flex-row h-auto md:h-screen">
        {/* First Image (Left Side) */}
        <div className="w-full md:w-1/2 h-full">
          <img src={first} className="w-full h-full object-cover" />
        </div>

        {/* Second and Third Images (Right Side) */}
        <div className="w-full md:w-1/2 h-full flex flex-col">
          <div className="h-1/2 w-full">
            <img src={second} className="w-full h-full object-cover" />
          </div>
          <div className="h-1/2 w-full">
            <img src={third} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className='w-full h-auto mt-4 '>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 p-4 gap-4 '>
          <div>
            <div className='flex items-center gap-4 rounded-xl p-4 bg-[#ffffff]'>

              <BsBuilding size={30} className='text=[#0C385D]' />
              <div className='flex flex-col'>
                <span className='text-[20px] font-bold text-[#0C385D]'>Shopping Mall</span>
                <span className='text-[12px] text-[#0C385D]'>Property Type</span>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-4 rounded-xl p-4 bg-[#ffffff]'>

              <BsBuilding size={30} className='text=[#0C385D]' />
              <div className='flex flex-col'>
                <span className='text-[20px] font-bold text-[#0C385D]'>Shopping Mall</span>
                <span className='text-[12px] text-[#0C385D]'>Property Type</span>
              </div>
            </div>

          </div>
          <div>
            <div className='flex items-center gap-4 rounded-xl p-4 bg-[#ffffff]'>

              <BsBuilding size={30} className='text=[#0C385D]' />
              <div className='flex flex-col'>
                <span className='text-[20px] font-bold text-[#0C385D]'>Shopping Mall</span>
                <span className='text-[12px] text-[#0C385D]'>Property Type</span>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-4 rounded-xl p-4 bg-[#ffffff]'>

              <BsBuilding size={30} className='text=[#0C385D]' />
              <div className='flex flex-col'>
                <span className='text-[20px] font-bold text-[#0C385D]'>Shopping Mall</span>
                <span className='text-[12px] text-[#0C385D]'>Property Type</span>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-4 rounded-xl p-4 bg-[#ffffff]'>

              <BsBuilding size={30} className='text=[#0C385D]' />
              <div className='flex flex-col'>
                <span className='text-[20px] font-bold text-[#0C385D]'>Shopping Mall</span>
                <span className='text-[12px] text-[#0C385D]'>Property Type</span>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-4 rounded-xl p-4 bg-[#ffffff]'>

              <BsBuilding size={30} className='text=[#0C385D]' />
              <div className='flex flex-col'>
                <span className='text-[20px] font-bold text-[#0C385D]'>Shopping Mall</span>
                <span className='text-[12px] text-[#0C385D]'>Property Type</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default PropertyHero;