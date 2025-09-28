"use client"

import { wishlistContext } from '@/context/WishlistContext'
import React, { useContext } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ProductRoot } from '@/types/product.type';

const page = () => {
    const { products, isLoading, removeWishlistItem } = useContext(wishlistContext);

    async function handleRemoveItem(id: string) {
        const data = await removeWishlistItem(id);

        if (data.status === "success") {
            toast.success("Item removed from wishlist", {
                position: "top-center",
                duration: 3000,
                icon: <i className="fa-solid fa-heart-crack text-red-500"></i>
            });
        } else {
            toast.error("Failed to remove item", {
                position: "top-center",
                duration: 3000,
                icon: <i className="fa-solid fa-circle-xmark text-red-500"></i>
            });
        }
    }

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
                        <div key={idx} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/5 p-3">
                            <div className="inner">
                                <Card className="p-2 gap-2 group hover:shadow-lg transition-shadow">
                                    <div className="relative">
                                        <Link href={`/productDetails/${product.id}`}>
                                            <CardHeader className="p-0">
                                                <Image alt={product.title} width={500} height={500} src={product.imageCover} />
                                            </CardHeader>
                                            <CardContent className="p-0">
                                                <p className="font-bold text-green-500 mb-3">{product.category.name}</p>
                                                <p className="line-clamp-1">{product.title}</p>
                                            </CardContent>
                                            <CardFooter className="p-0">
                                                <div className="w-full flex flex-row justify-between items-center">
                                                    <p>{product.price} EGP</p>
                                                    <p>{product.ratingsAverage} <i className="fa-solid fa-star text-yellow-300"></i></p>
                                                </div>
                                            </CardFooter>
                                        </Link>

                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={() => handleRemoveItem(product._id)}
                                        >
                                            <i className="fa-solid fa-heart-crack"></i>
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}

export default page