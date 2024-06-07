import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-[calc(100vh-200px)] flex justify-center items-center flex-col gap-5'>
            <h1 className='lg:text-7xl md:text-6xl text-5xl text-neutral-900 font-bold font-oswald text-center drop-shadow-sm shadow-main'>404 Not Found</h1>
            <button
                onClick={() => navigate('/')}
                className='py-3 sm:px-5 px-3 md:text-lg text-base font-medium font-oswald bg-main hover:bg-[#922f2f] text-white rounded-md shadow-md shadow-main'>
                Back to home page
            </button>
        </div>
    )
}

export default NotFound