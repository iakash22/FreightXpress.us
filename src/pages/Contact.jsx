import React, { useState } from 'react'
import TruckImg from '../assets/truck-img-6.jpeg'
import { GrLocation, GrPhone } from "react-icons/gr";
import { MdOutlineAttachEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { createSheetData } from '../utils/sheetDbService';

const initialData = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

const Contact = () => {
    const [data, setData] = useState(initialData);
    const [successMsg, setSuccessMsg] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const URL = import.meta.env.VITE_CONTACT_DB_URL;
    const onChangeHandler = (e) => {
        const { value, name } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    const sumbitHandler = async (e) => {
        e.preventDefault();
        // console.log(data);
        setLoading(true);
        await createSheetData(URL, data, setSuccessMsg, setErrorMsg);
        setLoading(false);
        setData(initialData);
    }
    return (
        <div>
            <div className='w-full h-[200px] mb-[5rem]'>
                <img
                    src={TruckImg}
                    alt="truck"
                    className='w-full h-full object-cover object-center'
                />
            </div>
            <div className='sm:px-[4rem] p-4'>
                <div className='flex md:flex-row flex-col gap-x-6 items-center justify-between'>
                    <div>
                        <div className='w-full flex justify-center flex-col gap-y-3 mb-5 md:pl-0 pl-6'>
                            <h4 className='text-2xl md:text-3xl xl:text-4xl text-main font-bold items-start'>Get a Quote</h4>
                            <h2 className='text-3xl md:text-4xl xl:text-5xl text-neutral-700  font-medium'>
                                Get in Touch And We’ll Help Your Business
                            </h2>
                        </div>
                        <div className='flex flex-col gap-y-3'>
                            <IconCard
                                title={"Office address"}
                                info={"513 W Bonaventure Ave, Tracy, CA 95391"}
                                Icon={GrLocation}
                                to={false}
                            />
                            <IconCard
                                title={"Telephone number"}
                                info={"+1 (209) 222-3455"}
                                Icon={GrPhone}
                                to={'tel:+12092223455'}
                            />
                            <IconCard
                                title={"Mail address"}
                                info={"info@freightxpress.us"}
                                Icon={MdOutlineAttachEmail}
                                to={'mailto:info@freightxpress.us'}
                            />
                        </div>
                    </div>

                    <div className='font-oswald bg-[#f0efefe0] mt-5 px-2 py-5 md:p-10 w-full rounded-sm'>
                        <h2 className='text-4xl md:text-6xl font-medium md:font-bold text-main text-center mb-8'>Get a Quote</h2>
                        <form onSubmit={sumbitHandler} className='flex flex-col gap-y-6 mb-8 md:mb-0'>
                            <input
                                type="text"
                                placeholder='Your name*'
                                name='name'
                                required
                                value={data.name}
                                onChange={onChangeHandler}
                                className='w-full px-5 py-2 text-base outline-none md:text-lg md:py-3 md:px-8 bg-[#fff] border-none rounded-md placeholder:text-neutral-500 text-neutral-700'
                            />
                            <input
                                type="email"
                                placeholder='Email*'
                                name='email'
                                value={data.email}
                                required
                                onChange={onChangeHandler}
                                className='w-full px-5 py-2 text-base outline-none md:text-lg md:py-3 md:px-8 bg-[#fff] border-none rounded-md placeholder:text-neutral-500 text-neutral-700'
                            />
                            <input
                                type="text"
                                placeholder='Phone Number*'
                                name='phone'
                                maxLength={12}
                                minLength={6}
                                value={data.phone}
                                onChange={onChangeHandler}
                                required
                                className='w-full px-5 py-2 text-base outline-none md:text-lg md:py-3 md:px-8 bg-[#fff] border-none rounded-md placeholder:text-neutral-500 text-neutral-700'
                            />
                            <textarea
                                name="message"
                                id="message"
                                rows={8}
                                placeholder='Your Message*'
                                value={data.message}
                                onChange={onChangeHandler}
                                required
                                className='w-full px-5 py-2 text-base outline-none md:text-lg md:py-3 md:px-8 bg-[#fff] border-none rounded-md placeholder:text-neutral-500 text-neutral-700'
                            ></textarea>

                            <button
                                type='submit'
                                className='text-lg bg-main md:py-[10px] py-1 md:px-8 md:text-xl md:font-normal px-4 text-[#fff] font-light tracking-wider rounded-md'
                            >
                                {loading ? "Submiting..." : "Sumbit"}
                            </button>
                            {
                                successMsg && (
                                    <div className='text-lg text-main drop-shadow shadow-main font-semibold'>{successMsg}</div>
                                )
                            }
                            {
                                errorMsg && (
                                    <div className='text-lg text-main drop-shadow shadow-main font-semibold'>{errorMsg}</div>
                                )
                            }
                        </form>

                    </div>
                </div>
            </div>

            <div className='bg-[#650704e3] font-oswald p-4 md:px-[4rem] flex justify-between items-center gap-x-5'>
                <div className='text-[#fff]'>
                    <h2 className='text-xl font-bold'>Looking for the Best Transport Services?</h2>
                    <p className='text-sm font-light mt-2'>As a app web crawler expert, We will help to organize.</p>
                </div>
                <button
                    onClick={() => { navigate('/contact'); window.scrollTo(0, 0) }}
                    className='py-3 px-4 text-base font-semibold text-[#fff] bg-main hover:bg-[#0592fd] transition rounded-sm text-nowrap self-start'>
                    GET A QUOTE
                </button>
            </div>
        </div>
    )
}

export default Contact

const IconCard = ({ Icon, title, info, to }) => {
    return (
        <Link to={to}>
            <div className='bg-[#f0efefe0] p-4 md:p-6 cursor-pointer hover:border-t-[4px] border-main transition duration-200 group font-oswald flex gap-x-10 hover:rounded-t-none rounded-md'>
                <div className='w-[60px] md:w-[100px] md:h-[90px] h-[60px] rounded-md bg-[#fc79795f] flex items-center justify-center group-hover:bg-main'>
                    <Icon
                        className="text-[40px] md:text-[55px] text-main group-hover:text-[#fff]"
                    />
                </div>
                <div className='flex flex-col gap-y-[6px]'>
                    <p className='text-xl md:text-2xl text-main font-semibold'>{title}</p>
                    <p className='text-sm md:text-base text-neutral-600'>{info}</p>
                </div>
            </div>
        </Link>
    )
}