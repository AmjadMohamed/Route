"use client"
import React from 'react'
import Image from 'next/image'
import bannerImage1 from './../../../../public/Assets/screens/slider/slider-2.jpeg'
import bannerImage2 from './../../../../public/Assets/screens/slider/grocery-banner-2.jpeg'

import sliderImage1 from './../../../../public/Assets/screens/slider/slider-image-1.jpeg'
import sliderImage2 from './../../../../public/Assets/screens/slider/slider-image-2.jpeg'
import sliderImage3 from './../../../../public/Assets/screens/slider/slider-image-3.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './styles.css';

const MainSlider = () => {
    return (
        <div className='mb-10 flex'>
            <div className='w-2/3'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={true}
                    modules={[Pagination]}
                >
                    <SwiperSlide><Image className='h-[400px] w-full object-cover' src={sliderImage1} alt='slider image 1' /></SwiperSlide>
                    <SwiperSlide><Image className='h-[400px] w-full object-cover' src={sliderImage2} alt='slider image 2' /></SwiperSlide>
                    <SwiperSlide><Image className='h-[400px] w-full object-cover' src={sliderImage3} alt='slider image 3' /></SwiperSlide>
                </Swiper>
            </div>
            <div className='w-1/3'>
                <Image className='h-[200px] object-cover' src={bannerImage1} alt='banner image 1' />
                <Image className='h-[200px] object-cover' src={bannerImage2} alt='banner image 2' />
            </div>
        </div>
    )
}

export default MainSlider
