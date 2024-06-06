import React from 'react'
import { BiLoaderAlt } from "react-icons/bi";
import AutoSlider from '../controllers/AutoSlider';
import About_Img from '../assets/about-img-1.jpg'
import { CiGlobe } from "react-icons/ci";
import { TbMapPin2 } from "react-icons/tb";

const About = () => {
    return (
        <div className=''>
            <AutoSlider />

            <div className='my-[5rem] sm:px-[4rem] font-oswald flex md:flex-row flex-col justify-between gap-8'>
                <div className='w-full md:w-[50%] h-[480px] md:h-[525px] px-2 rounded-sm'>
                    <img
                        src={About_Img}
                        alt="about-img"
                        className='w-full h-full object-cover rounded-sm'
                    />
                </div>

                <div className='px-2 sm:px-4 md:w-[60%]'>
                    <div className='flex items-baseline gap-x-1'>
                        <p className='w-[30px] md:w-[80px] bg-gradient-to-r from-[#00000000] via-[#6504044c] to-[#6d0505ef] h-1'></p>
                        <p className='text-2xl lg:text-4xl md:text-3xl text-main font-oswald font-bold'>About Company</p>
                    </div>
                    <h2 className='text-3xl lg:text-5xl md:text-4xl md:font-normal font-oswald font-light mt-3 text-neutral-700'>Digital & Trusted Transport Logistic Company</h2>
                    <p className='text-base lg:text-lg font-oswald my-5 text-neutral-700'>
                        Freightxpress is a business that was founded with the purpose of providing personalized services
                        to help both small and large businesses overcome daily operational challenges. Our ultimate goal
                        is to provide professional, well-trained personnel who can effectively adapt to the unique needs
                        of each business we serve.
                    </p>

                    <div className='flex items-center px-2 md:px-5 lg:px-6 py-3 md:py-3 gap-x-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[5px] group'>
                        <div className='w-[50px] lg:w-[70px] md:w-[60px] lg:h-[70px] md:h-[60px] h-[50px] rounded-full bg-[#fc79795f] flex items-center justify-center group-hover:bg-main transition-all duration-300 ease-out'>
                            <CiGlobe
                                className='text-[40px] lg:text-[50px] md:p-0 group-hover:text-[#fff] text-main p-1 transition-all duration-300 ease-out'
                            />
                        </div>
                        <div className='w-[75%]'>
                            <h3 className='text-lg md:text-xl font-oswald text-main font-semibold'>Global Service</h3>
                            <p className='text-sm md:text-[16px] font-oswald text-neutral-700'>We always provide people a complete solution focused of any business.</p>
                        </div>
                    </div>

                    <div className='flex items-center px-2 md:px-5 lg:px-6 py-3 md:py-5 gap-x-5 group shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[5px] mt-5'>
                        <div className='w-[50px] lg:w-[70px] md:w-[60px] lg:h-[70px] md:h-[60px] h-[50px] rounded-full bg-[#fc79795f] flex items-center justify-center group-hover:bg-main transition-all duration-300 ease-out'>
                            <TbMapPin2
                                className='text-[40px] lg:text-[50px] md:p-0 group-hover:text-[#fff] text-main p-1 transition-all duration-300 ease-out'
                            />
                        </div>
                        <div className='w-[75%]'>
                            <h3 className='text-lg lg:text-xl font-oswald text-main font-semibold'>Local Service</h3>
                            <p className='text-sm md:text-[16px] font-oswald text-neutral-700'>Nam eget convallis neque. Sed porta eleifend posuere integer posuere purus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About