import React, { useEffect, useRef, useState } from 'react'
import Hero_Video from '../assets/hero-video.mp4'
import { IoMdArrowDropdown } from "react-icons/io";
import { FaTruckLoading } from "react-icons/fa";
import { FaTruckFast, FaTruckFront, FaArrowRight } from "react-icons/fa6";
import { LuShip } from "react-icons/lu";
import { getCityData } from '../utils/getCitySearch';
import TruckImg1 from '../assets/truck-img2.jpeg'
import TruckImg2 from '../assets/truck-img1.jpeg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1500, mirror: false });
    })
    return (
        <div className=''>
            <div className='bg-[#650704] w-full h-[calc(100vh-280px)] md:h-full'>
                <div className='flex sm:px-[4rem] lg:justify-between justify-center'>
                    <h1 className='lg:text-7xl sm:block hidden font-oswald font-bold text-[#fff] text-5xl md:mt-[5rem] my-[3rem]'>
                        FreightXpress
                        <p className='lg:text-7xl md:text-5xl font-oswald font-bold text-[#fff] sm:text-7xl'>Corporation</p>
                    </h1>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        className='sm:mt-[2rem] z-[10] sm:w-fit w-full block rounded-none sm:rounded-[35px] shadow-md shadow-[#eb5d5d69] sm:mb-0 mb-2'>
                        <video
                            autoPlay
                            muted
                            loop
                            className='lg:w-[580px] md:w-[380px] md:h-[350px] lg:h-[450px] h-[280px] w-full object-cover sm:rounded-[35px] shadow-md shadow-[#00000069]'
                        >
                            <source src={Hero_Video} type='video/mp4' />
                        </video>
                    </div>
                </div>

                <div className='bg-[#fff] sm:rounded-t-[50px] sm:px-[4rem] -mt-[0.38rem] md:-mt-[10rem] lg:-mt-[15rem] z-[1] h-[100%] flex sm:justify-center items-center flex-col md:justify-start md:items-start'>
                    <h1 className='lg:text-7xl sm:hidden block font-oswald font-bold text-main text-5xl sm:mt-0 mt-5'>
                        FreightXpress
                        <p className='lg:text-7xl md:text-5xl font-oswald font-bold text-[#fff] sm:text-7xl'>Corporation</p>
                    </h1>
                    <p className='text-[#650704] lg:text-xl font-oswald md:w-[40%] sm:pt-5 pt-0 sm:font-medium sm:mt-[3rem] mt-1 w-[80%] text-wrap'>
                        Looking for the Best Transport Services?
                        As a app web crawler expert, We will help to organize.
                    </p>
                    <button className='px-4 py-3 rounded-sm font-oswald text-[#fff] bg-[#650704] font-semibold lg:mt-[4.5rem] md:mt-[3rem] my-[3rem]'>
                        <a href="tel:+12092223455">
                            Connect with us
                        </a>
                    </button>
                </div>
            </div>

            <div className='md:my-[3rem] font-oswald mt-[10rem] mb-[3rem] sm:px-[4rem]'>
                <form className='bg-[#fffffff2] flex flex-col justify-center'>
                    <div className='my-5'>
                        <div className='bg-[#650704] flex items-center justify-center p-2 h-fit '>
                            <p className='text-xl text-[#fff] text-nowrap font-medium'>PICK UP / DROP OFF</p>
                        </div>

                        <div className='flex md:justify-evenly justify-between gap-x-5 mt-5 md:px-0 px-4'>
                            <div className='flex flex-col gap-y-3 md:w-[30%] relative'>
                                <p className='text-[#650704] text-lg font-semibold mb-2'>Origin</p>
                                <CustomSearch
                                    title={'Pick Up Location*'}
                                />
                                <div>
                                    <p className='text-sm text-[#650704] mb-1'>Pick Up Date*</p>
                                    <input
                                        type="date"
                                        required
                                        value={Date.now()}
                                        className='w-full px-2 py-3 bg-[#c8e7fb47] text-neutral-600 font-light cursor-pointer border-none outline-none'
                                    />
                                </div>
                                <CustomDropDown
                                    title={'Pick Up Accessorial'}
                                    dropDownItems={[
                                        "Pickup Lift Gate Service",
                                        "Pickup Inside",
                                        "Pickup Residential",
                                        "Pickup Construction Site",
                                        "Pickup Tradeshow",
                                        "Pickup Limited Access Service",
                                    ]}
                                />
                            </div>
                            <div className='flex flex-col gap-y-3 md:w-[30%] relative'>
                                <p className='text-[#650704] text-lg font-semibold mb-2 '>Destination</p>
                                <CustomSearch
                                    title={'Drop Off Location*'}
                                />
                                <CustomDropDown
                                    title={'Drop Off Accessorial'}
                                    dropDownItems={[
                                        "Delivery Appointment",
                                        "Delivery Lift Gate Service",
                                        "Delivery Inside",
                                        "Delivery Residential",
                                        "Delivery Construction Site",
                                        "Delivery Tradeshow",
                                        "Delivery Limited Access Service",
                                    ]}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='my-5'>
                        <div className='bg-[#650704] flex items-center justify-center p-2 h-fit '>
                            <p className='text-xl text-[#fff] text-nowrap font-medium'>SHIPMENT DETAILS</p>
                        </div>

                        <div className='flex md:justify-evenly justify-between gap-x-5 mt-5 md:px-0 px-4 '>
                            <div className='flex flex-col gap-y-3 md:w-[30%] relative'>
                                <CustomInput
                                    title={'Description*'}
                                />
                                <CustomInput
                                    title={'Total Weight*'}
                                    placeholder={"Total Weight (lbs.)*"}
                                />
                                <CustomInput
                                    title={'Pallet Count*'}
                                    placeholder={"Pallet Count*"}
                                />
                                <CustomDropDown
                                    title={'Package Type*'}
                                    dropDownItems={[
                                        "Package Type*",
                                        "Skid",
                                        "Bundle",
                                        "Carton",
                                        "Drum",
                                        "Box",
                                        "Roll",
                                        "Tote",
                                        "Case",
                                        "Piece",
                                        "Crate",
                                        "Bag",
                                    ]}
                                />
                                <CustomDropDown
                                    title={'Additional Services'}
                                    dropDownItems={[
                                        "Additional Services",
                                        "Blinde Shipment",
                                        "Pallet Exchange",
                                        "Protection From Freezing",
                                        "Single Shipment",
                                        "Overlength 9 Feet",
                                        "Overlength 12 Feet",
                                        "Overlength 20 Feet",
                                        "Overlength 28 Feet",
                                    ]}
                                />
                            </div>
                            <div className='flex flex-col gap-y-3 md:w-[30%] relative'>
                                <CustomInput
                                    title={'Width*'}
                                    placeholder={"Width (inches)*"}
                                />
                                <CustomInput
                                    title={'Length*'}
                                    placeholder={"Length (inches)*"}
                                />
                                <CustomInput
                                    title={'Height*'}
                                    placeholder={"Height (inches)*"}
                                />
                                <CustomInput
                                    title={'Package Qty*'}
                                />
                                <CustomDropDown
                                    title={'Freight Class*'}
                                    dropDownItems={[
                                        "Freight Class*",
                                        "60",
                                        "65",
                                        "70",
                                        "85",
                                        "92.5",
                                        "100",
                                        "125",
                                        "175",
                                        "250",
                                        "300",
                                        "400",
                                    ]}
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='px-2 py-3 bg-main w-[100px] rounded-[6px] text-xl font-oswald font-light text-[#FFFFFF] self-center mt-8 mb-5'>
                        Temp
                    </button>
                </form>
            </div>

            <div className="relative overflow-hidden bg-[#FFFFFF] font-oswald sm:px-[4rem] px-4">
                <div className='flex md:flex-row gap-y-5 flex-col-reverse justify-between w-full my-10'>
                    <div className='flex flex-col justify-between' data-aos="fade-up-right">
                        <div className='flex flex-col gap-y-5 w-[100%] md:mb-0 mb-5'>
                            <h2 className='text-main md:text-5xl text-3xl font-bold'>WHY CHOOSE US?</h2>
                            <h4 className='text-black md:text-4xl text-2xl font-semibold'> Your logistics Bussines Today.</h4>
                            <p className='text-neutral-700 md:text-lg text-base md:w-[80%]'>
                                Our agents are prepared to join your team
                                since they have received industry-specific
                                training and instruction. assisting trucking
                                companies, whether new and established, in
                                realising their full potential and optimising
                                their operations.
                            </p>
                        </div>

                        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-2 md:mr-3'>
                            <div className='px-2 py-3 text-xl font-semibold text-main rounded-md flex items-center gap-x-5
                                            shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                                <FaTruckLoading />
                                Safe Packing
                            </div>
                            <div className='px-2 py-3 text-xl font-semibold text-main rounded-md flex items-center gap-x-5
                                            shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                                <FaTruckFront />
                                Right Time Delivery
                            </div>
                            <div className='px-2 py-3 text-xl font-semibold text-main rounded-md flex items-center gap-x-5
                                            shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                                <LuShip />
                                Ship everywhere
                            </div>
                            <div className='px-2 py-3 text-xl font-semibold text-main rounded-md flex items-center gap-x-5
                                            shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                                <FaTruckFast />
                                Fastest Shipping
                            </div>
                        </div>
                    </div>
                    <div className='sm:w-[100%] h-[400px] rounded-sm' data-aos="fade-up-left">
                        <img
                            src="https://freightxpress.us/wp-content/uploads/2021/11/tab-3.jpg"
                            alt="https://freightxpress.us/wp-content/uploads/2021/11/tab-3.jpg"
                            className='object-fill object-center w-full h-full rounded-md'
                        />
                    </div>
                </div>
            </div>

            <div className='relative mb-[3rem]'>
                <div className='choose-bg h-screen w-full mt-[5rem] relative z-1 opacity-40'>
                    <div className='w-full h-full bg-[#ff4c4c6b] backdrop-contrast-100 absolute top-0 bottom-0 right-0 z-10'>
                    </div>
                </div>
                <div className='absolute z-[100] top-0 right-0 left-0 bottom-0 flex flex-col items-center sm:px-[4rem] px-4 '>
                    <div className='flex mt-3 shadow-xl shadow-[#803e3d96]'>
                        <div data-aos="fade-right" className='border-[3px] border-r-0 border-main'>
                            <img
                                src={TruckImg1}
                                alt="TruckImg1"
                                className='md:w-[450px] md:h-[350px] object-fill opacity-90'
                            />
                        </div>
                        <div data-aos="fade-left" className='border-[3px] border-l-0 border-main'>
                            <img
                                src={TruckImg2}
                                alt="TruckImg1"
                                className='md:w-[450px] md:h-[350px] object-fill opacity-90'
                            />
                        </div>
                    </div>
                    <div className='font-oswald md:w-[900px] my-5' data-aos="fade">
                        <h1 className='text-xl text-main font-semibold mb-2'>ABOUT US</h1>
                        <h2 className='md:text-2xl text-lg  font-medium text-[#373A40]'>Personalized customer service & Dispatch Agents</h2>
                        <p className='md:text-base text-sm mt-1 text-[#373A40]'>
                            These are just a few of the tasks that freightxpress agents are prepared to do Coordinate shipments,
                            including bookings, cargo tracking, and answering client questions.
                        </p>
                        <div className='flex flex-row justify-between mt-2 w-full'>
                            <div className='md:text-sm text-xs text-[#686D76] w-[45%]'>
                                <p>Customers should be promptly informed of any shipment issues or delays. possibilities for problem-solving, too.</p>
                                <p className='mt-1'>closure of bonds and processing of all bonded paperwork with US Customs (7512/1. E, TE, I.I)</p>
                            </div>
                            <div className='md:text-sm text-xs text-[#686D76] w-[45%]'>
                                <p>Create a positive and cooperative working environment with the Logistics Team and other departments.</p>
                                <p className='mt-1'>processing of all invoices, including backup, POD, and any other relevant documents.</p>
                            </div>
                        </div>

                        <button className='px-2 py-[8px] mx-auto text-[#373A40] text-lg font-medium border-2 border-main mt-3 group flex items-center gap-x-2 rounded-sm'>
                            ABOUT US
                            <FaArrowRight
                                className='group-hover:translate-x-2 transition group-hover:text-main'
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home

const CustomDropDown = ({ title, dropDownItems }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const [newTitle, setNewTitle] = useState(title);
    useEffect(() => {
        const close = (e) => {
            if (!ref.current.contains(e.target)) {
                setOpen(false);
            }
            // console.log(e.target);
        }
        document.addEventListener('mousedown', close, true);

        return () => document.removeEventListener('mousedown', close);
    })

    const clickHandler = (item) => {
        setNewTitle(item);
        setOpen(false);
    }

    return (
        <div className='relative' ref={ref}>
            <p className='text-sm text-[#650704] mb-1'>{title}</p>
            <div
                onClick={() => setOpen(!open)}
                className='flex justify-between gap-x-10 bg-[#c8e7fb47] px-2 py-3 cursor-pointer'
            >
                <p className='text-neutral-600 font-light'>{newTitle}</p>
                <IoMdArrowDropdown className='text-[30px]' />
            </div>

            {
                open && (
                    <div className='absolute bottom-[50%] left-[50%] bg-[#ffffff] rounded-[10px] text-neutral-600 font-light shadow-md shadow-[#00000075] py-1'>
                        {
                            dropDownItems.map((item, index) => (
                                <p
                                    className='cursor-pointer hover:bg-[#85383574] hover:text-[#fff] w-full rounded-[5px] px-2 py-1'
                                    onClick={() => clickHandler(item)}
                                    key={index}
                                >
                                    {item}
                                </p>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

const CustomSearch = ({ title }) => {
    const [open, setOpen] = useState(false);
    const [field, setField] = useState("");
    useEffect(() => {
        const getSearchCityData = async () => {
            await getCityData(field);
        }
        // getSearchCityData();
    }, [field])
    return (
        <div>
            <p className='text-sm text-[#650704] mb-1'>{title}</p>
            <div className='relative w-full'>
                <input
                    type='search'
                    onFocus={() => setOpen(true)}
                    onBlur={() => setOpen(false)}
                    placeholder={title}
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    className='flex justify-between gap-x-10 bg-[#c8e7fb47] px-2 py-3 cursor-pointer w-full border-none outline-none
                                placeholder:text-neutral-600 placeholder:font-light'
                />
                <IoMdArrowDropdown
                    className='text-[30px] absolute top-[16%] right-2'
                />
            </div>

            {
                open && (
                    <div>
                        Searching...
                    </div>
                )
            }
        </div>
    )
}

const CustomInput = ({ title, placeholder }) => {
    const [field, setField] = useState("");
    return (
        <div>
            <p className='text-sm text-[#650704] mb-1'>{title}</p>
            <div className='w-full'>
                <input
                    type='text'
                    required
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    placeholder={placeholder ? placeholder : title}
                    className='flex justify-between gap-x-10 bg-[#c8e7fb47] px-2 py-3 cursor-pointer w-full border-none outline-none
                                placeholder:text-neutral-600 placeholder:font-light'
                />
            </div>
        </div>
    )
}