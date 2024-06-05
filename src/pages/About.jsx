import React from 'react'
import { BiLoaderAlt } from "react-icons/bi";
const About = () => {
    return (
        <div className='h-[calc(100vh-150px)] flex items-center md:flex-row flex-col text-main justify-center gap-8'>
            <h1 className='text-5xl text-center font-oswald font-bold leading-[3.5rem]'>Working On About Page</h1>
            <BiLoaderAlt
                className='animate-spin text-[60px] '
            />
        </div>
    )
}

export default About