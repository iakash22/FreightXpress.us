import React, { useEffect, useState } from 'react';
import Img1 from '../assets/slide-img-1.jpg';
import Img4 from '../assets/slide-img-4.jpg';
import Img5 from '../assets/slide-img-5.jpg';
import Img6 from '../assets/slide-img-6.jpg';

const imageData = [
    Img1,Img4,Img5,Img6
]

const AutoSlider = () => {
    const [currentState, setCurrentState] = useState(0);
    const bgStyle = {
        backgroundImage: `url(${imageData[currentState]})`,
    }
    const nextSlide = (state) => {
        setCurrentState(state);
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === imageData.length-1) {
                setCurrentState(0)
            } else {
                setCurrentState(currentState + 1);
            }
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentState])
    return (
        <div style={bgStyle} className='relative w-full h-[calc(100vh-100px)] bg-center bg-cover z-1 flex flex-col-reverse '>
            <div className='w-full h-full absolute top-0 right-0 bottom-0 left-0 bg-[#f47466c8] z-10 opacity-50 backdrop-blur-[4px]'></div>
            <div className='flex gap-x-5 justify-center mb-10'>
                {
                    imageData.map((_, state) => (
                        <span
                            key={state}
                            onMouseEnter={() => nextSlide(state)}
                            onMouseLeave={() => setCurrentState(state)}
                            className='w-[30px] h-[30px] bg-[rgba(210,210,210,0.19)] rounded-full backdrop-blur-md shadow-lg shadow-[#000] 
                                        hover:shadow-xl hover:shadow-[#000] cursor-pointer transition z-20 hover:scale-[1.1] active:scale-[1.1]'
                            // onClick={() => nextSlide(state)}
                        >

                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default AutoSlider