import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductRoot } from '@/types/product.type';
import AddCartButton from '../AddToCartButton/AddCartButton';
import WishlistHeart from '../WishlistHeart/WishlistHeart';

const HomeCard = ({ product }: { product: ProductRoot }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/5 p-3">
            <div className="inner">
                <Card className="p-2 gap-2">
                    <div className="relative">
                        <div className="absolute top-2 right-2 z-10">
                            <WishlistHeart productId={product._id} />
                        </div>
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
                    </div>
                    <AddCartButton id={product._id} />
                </Card>
            </div>
        </div>
    )
}

export default HomeCard
