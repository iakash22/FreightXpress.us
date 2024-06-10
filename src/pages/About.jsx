import React, { useEffect } from 'react'
import { BiLoaderAlt } from "react-icons/bi";
import AutoSlider from '../controllers/AutoSlider';
import About_Img from '../assets/about-img-1.jpg'
import { CiGlobe } from "react-icons/ci";
import { TbMapPin2 } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Icon1, Icon2, Icon3 } from '../assets';
import Truck1 from '../assets/truck-img-4.jpeg'
import Truck2 from '../assets/truck-img-5.jpeg'
import Truck3 from '../assets/truck-img-6.jpeg'
import CardSlider from '../controllers/CardSlider';
import { useNavigate } from 'react-router-dom';

const testimonialData = [
    {
        name: "joe murphy",
        comment : "Freight Express has been a game-changer for our logistics needs. Their team is incredibly efficient, reliable, and always goes the extra mile to ensure our shipments arrive on time. We couldn't ask for a better partner in our supply chain operations."
    },
    {
        name: "steive wood",
        comment : "Working with Freight Express has been an absolute pleasure. Their expertise and dedication to providing top-notch service have made a significant impact on our business. From start to finish, they handle everything with precision and professionalism."
    },
    {
        name: "daniel smith",
        comment : "Freight Express stands out in the logistics industry for their exceptional service and attention to detail. Their team consistently delivers high-quality results, making our shipping process seamless and stress-free. We highly recommend them to anyone in need of reliable logistics solutions."
    },
    {
        name: "Sarah Johnson",
        comment : "Freight Express has consistently exceeded our expectations with their outstanding service and reliability. Their commitment to timely deliveries and excellent customer support has made them our go-to logistics partner. We highly recommend them for any shipping needs."
    },
    {
        name: "Michael Brown:",
        comment : "Choosing Freight Express was one of the best decisions we've made for our logistics operations. Their professional approach and attention to detail have ensured our shipments always arrive safely and on schedule. We couldn't be happier with their service."
    },
    {
        name: "Emily Davis",
        comment : "Freight Express has been an invaluable asset to our business. Their efficient and cost-effective solutions have streamlined our shipping process, allowing us to focus on our core operations. The team's dedication to customer satisfaction is truly commendable."
    }
]

const About = () => {
    const navigate = useNavigate();
    useEffect(() => {
        Aos.init({ duration: 1000 });
    })
    return (
        <div className=''>
            <AutoSlider />

            <div className='my-[5rem] sm:px-[4rem] font-oswald flex md:flex-row flex-col justify-between gap-8' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className='w-full md:w-[50%] h-[480px] md:h-[590px] px-2 rounded-sm'>
                    <img
                        src={About_Img}
                        alt="about-img"
                        className='w-full h-full object-cover rounded-sm'
                    />
                </div>

                <div className='px-2 sm:px-4 md:w-[60%] flex flex-col'>
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
                            <p className='text-sm md:text-[16px] font-oswald text-neutral-700'>Choose comfort. Efficient service ensures pure satisfaction.</p>
                        </div>
                    </div>

                    <button onClick={() => navigate('/contact')} className='text-lg font-oswald bg-main text-[#FFFFFF] px-5 py-2 font-medium rounded-[8px] mt-5 self-center md:self-start'>
                        Contact Us
                    </button>
                </div>
            </div>

            <div className='mt-[5rem] sm:px-[4rem] p-2 font-oswald bg-[#ebeaeaa0]'>
                <div className='w-full flex justify-center flex-col items-center gap-y-3 my-10'>
                    <h4 className='mt-8 text-3xl text-main font-bold'>Our Goodness</h4>
                    <h2 className='text-4xl text-neutral-700 text-center'>What Make Us Special</h2>
                </div>

                <div className='grid lg:grid-cols-3 sm:grid-cols-2 flex-wrap gap-5 lg:gap-8'>
                    <SpecialCard
                        title={"Free Consultations"}
                        icon={Icon3}
                    />
                    <SpecialCard
                        title={"Ticket Support"}
                        icon={Icon2}
                    />
                    <SpecialCard
                        title={"Reliability & Punctuality"}
                        icon={Icon1}
                    />
                </div>

                <div className='my-[3rem]' data-aos="fade-up">
                    <div className='relative w-full h-[100px] sm:h-[150px] md:h-[180px] lg:h-[300px] rounded-sm'>
                        <img
                            src={Truck3}
                            alt="truck"
                            className='w-full h-full object-cover md:object-fill object-center rounded-sm'
                        />
                        <div className='absolute bg-[#278ec94c] lg:bg-[#278ec976] top-0 bottom-0 left-0 right-0 backdrop-blur-sm 
                                        md:backdrop-blur-md opacity-60 md:backdrop-contrast-150 backdrop-contrast-200 flex justify-center'>
                            <p className='md:text-5xl text-2xl font-semibold opacity-40'>Freightxpress</p>
                        </div>
                    </div>
                </div>

                <div className='mb-[5rem]'>
                    <div className='w-full flex justify-center flex-col items-center gap-y-3 my-10'>
                        <h4 className='mt-8 text-3xl text-main font-bold'>Testimonial</h4>
                        <h2 className='text-4xl text-neutral-700 text-center'>What People and Clients Think About Us?</h2>
                    </div>
                    <CardSlider data={testimonialData} />
                </div>
            </div>

            <div className='bg-[#650704e3] font-oswald p-4 md:px-[4rem] flex justify-between items-center gap-x-5'>
                <div className='text-[#fff]'>
                    <h2 className='text-xl font-bold'>Looking for the Best Transport Services?</h2>
                    <p className='text-sm font-light mt-2'>As a app web crawler expert, We will help to organize.</p>
                </div>
                <button onClick={() => navigate('/contact')} className='py-3 px-4 text-base font-semibold text-[#fff] bg-main hover:bg-[#0592fd] transition rounded-sm text-nowrap self-start'>
                    GET A QUOTE
                </button>
            </div>
        </div>
    )
}

export default About

const SpecialCard = ({ title, icon }) => {
    return (
        <div className='bg-[#FFFFFF] lg:px-8 px-5 sm:py-5 w-full sm:h-[190px] flex justify-center items-center flex-col gap-3 rounded-sm shadow-lg cursor-pointer overflow-hidden hover:translate-x-2 hover:-translate-y-2 transition-transform duration-500'>
            <div className='w-[150px] h-[100px] flex items-center justify-center'>
                <img
                    src={icon}
                    alt="icon"
                />
            </div>
            <p className='lg:text-3xl px-2 text-neutral-700 mb-5'>
                {title}
            </p>
        </div>
    )
}