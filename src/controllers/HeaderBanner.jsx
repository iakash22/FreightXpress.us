import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const HeaderBanner = () => {
    return (
        <div className='flex flex-row justify-between items-center px-2 md:justify-end md:gap-x-8 font-oswald md:py-[2px] mb-1'>
            <span className='text-xs md:text-sm '>
                513 W Bonaventure Ave, Tracy, CA 95391
            </span>
            <span className='h-[20px] bg-[#00000081] w-[1.5px] hidden md:block'></span>
            <span className='flex flex-row gap-x-2 items-center text-main md:text-xl font-semibold'>
                <FaPhoneAlt
                    className='rotate-[24deg] md:text-[16px] text-[14px] mt-[2px]'
                />
                +1 (929) 249-2527
            </span>
        </div>
    )
}

export default HeaderBanner