import getAllCategories from '@/apis/allCategories';
import React from 'react'
import CategorySwiper from '../CategorySwiper/CategorySwiper';
import { CategoryRoot } from '@/types/category.type';

const CategorySlider = async () => {

    const data: CategoryRoot[] = await getAllCategories();

    return (
        <div className='mb-3'>
            <h2 className='font-medium mb-4'>Shop Popular Categories</h2>
            <CategorySwiper categories={data} />
        </div>
    )
}

export default CategorySlider
