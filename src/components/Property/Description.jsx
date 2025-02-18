import React from 'react'

const Description = () => {
    return (
        <div className='w-full h-full bg-[#ffffff] px-5 md:px-10 lg:px-20 '>
            <div>
                <h1 className='text-[40px] text-[#080808] font-semibold '>Description</h1>
            </div>
            <div className='flex  flex-col md:flex-row  items-center justify-center gap-8 lg:gap-30 '>


                <div className='md:w-1/2 h-full w-full'>
                    Property Name -  Himalaya City Center Rajnagar Extension Ghaziabad (commercial mall)
                    Size- 6.5 acre
                    Price of property - 35 lakh onwards
                    Location - opposite Red Carpet Grand & gd goenka international school
                    Facilities nearby-
                    - BCCI international stadium less than 1km (2 min distance )
                    - Hindon elevated road (3 min driveway)
                    - Hindon river metro station (5 min driveway)
                    - Hindon Civil airport (8 min driveway)
                    - Narinder Mohan Hospital ( 8 min driveway)
                    - Dilshad garden metro ( 14 min driveway)
                    - Noida sec-62 ( 15min driveway)
                    - Anand Vihar ISBT(18 min driveway)
                </div>
                <div className='md:w-1/2 h-full w-full'>
                    <div className="grid grid-cols-2 gap-y-3  bg-gray-100">
                        <div className=" px-4 py-3 font-semibold border-b">Property Name:</div>
                        <div className="px-4 py-3 border-b">Himalaya City Center Rajnagar Extension Ghaziabad (commercial mall)</div>

                        <div className="px-4 py-3 font-semibold border-b">Size:</div>
                        <div className="px-4 py-3 border-b">2.5 Acre</div>

                        <div className="px-4 py-3 font-semibold border-b">Price:</div>
                        <div className="px-4 py-3 border-b">35 Lakh onwards</div>
                        <div className="px-4 py-3 font-semibold border-b">Location:</div>
                        <div className="px-4 py-3 border-b">1560 Sq Ft</div>

                        <div className="px-4 py-3 font-semibold border-b">Year Built:</div>
                        <div className="px-4 py-3 border-b">2024</div>

                       

                    </div>
                </div>

            </div>

        </div>

    )
}

export default Description