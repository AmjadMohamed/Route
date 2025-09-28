"use client"

import { wishlistContext } from '@/context/WishlistContext'
import React, { useContext } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from 'next/link';
import { ProductRoot } from '@/types/product.type';
import WishlistHeart from '../_components/WishlistHeart/WishlistHeart';
import HomeCard from '../_components/HomeCard/HomeCard';

const page = () => {
    const { products, isLoading } = useContext(wishlistContext);

    if (isLoading) {
        return <div className="flex justify-center items-center h-64">
            <i className="fa-solid fa-spinner fa-spin text-2xl text-green-500"></i>
        </div>
    }

    return (
        <section className="px-5 md:px-0 my-10 w-full md:w-[80%] mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">My Wishlist</h1>
                <p className="text-gray-600">
                    {products?.length > 0 ? `${products.length} item${products.length !== 1 ? 's' : ''} in your wishlist` : 'Your wishlist is empty'}
                </p>
            </div>

            {products?.length === 0 ? (
                <div className="text-center py-12">
                    <div className="mb-4">
                        <i className="fa-regular fa-heart text-6xl text-gray-300"></i>
                    </div>
                    <h2 className="text-2xl font-semibold text-green-600 mb-2">Your wishlist is empty</h2>
                    <p className="text-gray-500 mb-6">Start adding items you love to your wishlist!</p>
                </div>
            ) : (
                <div className="flex flex-wrap">
                    {products?.map((product: ProductRoot, idx: number) => (
                        <HomeCard key={idx} product={product} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default page