import React, { useEffect, useRef, useState } from 'react'
// import Logo from '../assets/logos/logo_white.png'
import { Link, useLocation } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import HeaderBanner from './HeaderBanner';

const Headers = () => {
    const menuRef = useRef();
    const [open, setOpen] = useState(false);

    const showNav = () => {
        if (!menuRef.current.classList.contains("active")) {
            setOpen(true)
            menuRef.current.classList.add("active")
        }
        else {
            setOpen(false);
            menuRef.current.classList.remove("active");
        }
    }

    useEffect(() => {
        const close = (e) => {
            if (menuRef.current.classList.contains('active') && !menuRef.current.contains(e.target)) {
                setOpen(false);
                menuRef.current.classList.remove("active");
            }
        }
        document.addEventListener('mousedown', close, true);

        return () => {
            document.removeEventListener('mousedown', close, true);
        }
    })

    return (
        <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#eaf7ff] sm:px-[2rem] font-oswald'>
            <HeaderBanner />
            <div className='w-full h-[1.5px] md:h-[2px] bg-gradient-to-r from-[#fff0] via-[#bf191367] to-[#650704d5]'></div>
            <div className='md:h-[90px] h-[70px] bg-main-bg px-4 text-[#fff] flex justify-between relative'>
                <div className='flex items-center gap-x-10 justify-between w-[70%] sm:w-full'>
                    <div className='flex items-center gap-x-2'>
                        <Link to={'/'} >
                            <img
                                src={'http://freightxpress.us/wp-content/uploads/2024/05/FX_Logo.png'}
                                alt="jetsetters"
                                className='md:w-[100px] md:h-[100px] w-[70px] h-[70px] aspect-auto mb-2 mt-3 md:p-3 p-2'
                            />
                        </Link>

                        <div className='font-heading font-oswald md:text-4xl sm:text-3xl text-2xl tracking-wide font-bold capitalize text-[#650704] drop-shadow-head-shade'>
                            FreightXpress
                            <p className='text-sm font-oswald font-normal md:font-medium text-start'>Corporation</p>
                        </div>
                    </div>
                    <div className='sm:flex lg:gap-x-8 gap-x-2 hidden justify-between font-content'>
                        <NavLink
                            title={"Home"}
                            to={'/'}
                            style={"text-lg"}
                        />
                        <NavLink
                            title={"About Us"}
                            to={'/about'}
                            style={"md:text-lg"}
                        />
                        <NavLink
                            title={"Contact Us"}
                            to={'/contact'}
                            style={"md:text-lg"}
                        />
                    </div>
                    <div className='sm:flex justify-between gap-x-5 items-center hidden'>
                        <button className='px-4 py-3 rounded-sm text-[#fff] bg-[#650704] font-semibold'>
                            <a href="tel:+12092223455">
                                Call
                            </a>
                        </button>
                        <button className='px-4 py-3 rounded-sm text-[#fff] bg-[#650704] font-semibold text-nowrap'>
                            <a href="https://wa.me/+12092223455" target="_blank" rel="noopener noreferrer">
                                Whats App
                            </a>
                        </button>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-x-2 lg:mr-[2rem] sm:hidden'>
                    {!open && <button
                        className='cursor-pointer'
                        onClick={showNav}
                    >
                        <TiThMenu className='text-[30px] text-[#d42f2f]' />
                    </button>}

                    {open && <button
                        className='cursor-pointer'
                        onClick={showNav}
                    >
                        <FaTimes className='text-[30px] text-[#d42f2f]' />
                    </button>}

                    <div
                        ref={menuRef}
                        className='nav-menu'>
                        <div className='flex flex-col items-center justify-center gap-y-2 font-content'>
                            <NavLink
                                title={"Home"}
                                to={'/'}
                                style={"text-lg"}
                            />
                            <NavLink
                                title={"About Us"}
                                to={'/about'}
                                style={"text-lg"}
                            />
                            <NavLink
                                title={"Contact Us"}
                                to={'/contact'}
                                style={"text-lg"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[0.7px] w-full bg-[#90ccf8f8]'></div>
        </div>
    )
}

const NavLink = ({ title, to, style }) => {
    const { pathname } = useLocation();
    return (
        <Link to={to}>
            <span className={`${style} font-semibold font-oswald hover:underline transition-all duration-150 cursor-pointer
                            ${pathname === to ? "text-[#650704]" : "text-[#650704aa] hover:text-[#650704]"}`
            }>
                {title}
            </span>
        </Link>
    )
}

export default Headers