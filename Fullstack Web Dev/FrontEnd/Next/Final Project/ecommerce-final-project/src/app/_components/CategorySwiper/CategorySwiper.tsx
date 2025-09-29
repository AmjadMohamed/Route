"use client"
import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import './styles.css';
import { CategoryRoot } from '@/types/category.type';
import Link from 'next/link';
import { categoryContext } from '@/context/CategoryContext';

const CategorySwiper = ({ categories }: { categories: CategoryRoot[] }) => {
    const { selectCategory } = useContext(categoryContext);

    const handleCategoryClick = (category: CategoryRoot) => {
        selectCategory(category);
    };

    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={5}
            >
                {categories.map((category, idx: number) =>
                    <SwiperSlide key={idx}>
                        <Link href="/subCategory" onClick={() => handleCategoryClick(category)}>
                            <Image width={500} height={500} src={category.image} alt="category image" className='h-[200px] object-cover w-full' />
                        </Link>
                        <p className='my-3'>{category.name}</p>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default CategorySwiper