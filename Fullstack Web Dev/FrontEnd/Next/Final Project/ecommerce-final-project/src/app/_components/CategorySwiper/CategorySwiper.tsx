"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import './styles.css';
import { CategoryRoot } from '@/types/category.type';

const CategorySwiper = ({ categories }: { categories: CategoryRoot[] }) => {

    console.log(categories);

    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={5}
            >
                {categories.map((category, idx: number) =>
                    <SwiperSlide key={idx}>
                        <Image width={500} height={500} src={category.image} alt="category image" className='h-[200px] object-cover w-full' />
                        <p className='my-3'>{category.name}</p>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default CategorySwiper
