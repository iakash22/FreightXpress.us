import React from 'react'
import {
    FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaPhone
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    return (
        // <div className='bg-[#ff4c4c3f] backdrop-contrast-100'>
        <div className={`bg-main ${location.pathname === "/" ? 'md:rounded-t-[30px]' : ''} md:px-[4rem] py-[2rem] px-4`}>
                <div className='flex lg:flex-nowrap flex-wrap justify-between my-10 md:w-[99%] gap-x-8 gap-y-8'>
                    <div className='md:w-[35%]'>
                        <img
                            src="http://freightxpress.us/wp-content/uploads/2024/05/FX_Logo.png"
                            alt="http://freightxpress.us/wp-content/uploads/2024/05/FX_Logo.png"
                            className='md:p-4 md:w-[180px] w-[120px] object-cover md:-mt-5'
                        />

                        <div className='text-lg font-oswald text-[#DDDDDD] mt-5'>
                            Freight Xpress is a business that was founded with the purpose of providing
                            personalized services to help both small and large businesses overcome daily
                            operational challenges.
                        </div>
                    </div>

                    <div className=''>
                        <CustomHeading
                            title={"Newsletter"}
                        />
                        <div className='text-lg font-oswald text-[#DDDDDD] md:mt-8 mt-3'>
                            Subscribe our newsletter to get our latest update & news
                        </div>
                        <div className='flex flex-row items-center mt-5'>
                            <input
                                type="email"
                                placeholder='Your email address'
                                className='px-5 w-full py-2 bg-transparent border-2 border-r-0 text-white border-[#ddddddb1] outline-0 placeholder:text-[#fff] text-base font-oswald'
                            />
                            <button className='bg-[#0592fd] text-[#fff] px-4 py-[7.5px] text-lg font-oswald tracking-wide'>Subscribe</button>
                        </div>
                        <div className='flex gap-x-5 items-center mt-5 w-full justify-between md:justify-start'>
                            <FaFacebook
                                className='text-[25px] text-[#0592fd] cursor-pointer hover:scale-[1.1] transition'
                            />
                            <FaInstagram
                                className='text-[25px] text-[#0592fd] cursor-pointer hover:scale-[1.1] transition'
                            />
                            <FaLinkedinIn
                                className='text-[25px] text-[#0592fd] cursor-pointer hover:scale-[1.1] transition'
                            />
                            <FaTwitter
                                className='text-[25px] text-[#0592fd] cursor-pointer hover:scale-[1.1] transition'
                            />
                        </div>
                    </div>

                    <div className=''>
                        <CustomHeading
                            title={"Official info:"}
                        />
                        <div className='flex gap-x-2 items-center md:mt-8 mt-5'>
                            <MdLocationPin
                                className='text-[18px] text-[#0592fd] self-center cursor-pointer'
                            />
                            <span className='text-lg text-[#DDDDDD] text-nowrap'>513 W Bonaventure Ave, Tracy, CA 95391</span>
                        </div>
                        <div className='mt-2'>
                            <a href="tel:+12092223455" className='flex gap-x-2 items-center cursor-pointer'>
                                <FaPhone
                                    className='text-[18px] text-[#0592fd] self-center cursor-pointer'
                                />
                                <span className='text-lg text-[#DDDDDD]'>+1 (209) 222-3455</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-[#DDDDDD] mx-auto'></div>
                <div className='text-center mt-2 text-[#fff] text-lg font-oswald'>© 2023 Freightxpress. All rights reserved.</div>
            </div>
        // </div>
    )
}

export default Footer

const CustomHeading = ({ title }) => {
    return (
        <div>
            <p className='text-[#fff] text-xl font-oswald font-semibold'>{title}</p>
            <div className='w-[50px] h-1 bg-[#0592fd]'></div>
        </div>
    )
}