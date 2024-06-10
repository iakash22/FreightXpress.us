import React, { useState } from 'react'
import { RxAvatar } from "react-icons/rx";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcNext, FcPrevious } from "react-icons/fc";
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const CardSlider = ({ data }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='sm:px-4 md:px-0 px-4 w-full'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#650704',
                    '--swiper-pagination-color': '#650704',
                    width: "100%"
                }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs]}
                spaceBetween={32}
                slidesPerView={1}
                grabCursor={true}
                breakpoints={{
                    600: {
                        slidesPerView: 2,
                        // spaceBetween : 50,
                    },
                    968: {
                        slidesPerView: 3,
                    },
                }}
                pagination={{ clickable: true, dynamicBullets: true, }}
                scrollbar={{ draggable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                onSwiper={(swiper) => "console.log(swiper)"}
                onSlideChange={() => "console.log('slide change')"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    waitForTransition: true,
                    pauseOnMouseEnter: true
                }}
            >
                {
                    data.map((cardData, index) => (
                        <SwiperSlide key={index} style={{ borderRadius: "15px" }}>
                            <div
                                className='group hover:bg-main bg-[#ffffff] h-[350px] rounded-[15px] transition-all duration-500 cursor-auto'
                            >
                                <div className='w-full flex justify-center items-center rounded-t-[15px] pt-5'>
                                    <RxAvatar
                                        className='group-hover:text-[#ffffff] text-main text-[5rem] transition-all duration-500'
                                    />
                                </div>
                                <div className='px-4 font-oswald h-[71.5%] rounded-t-[25px] rounded-b-[15px] bg-[#ffffff] flex justify-center items-center flex-col'>
                                    <p className='text-center text-xl font-bold text-main'>{cardData.name}</p>
                                    <p className='text-sm text-pretty font-oswald font-light text-neutral-700 my-5'>{cardData.comment}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default CardSlider