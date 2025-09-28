import GetSingleProduct from '@/apis/singleProduct';
import AddCartButton from '@/app/_components/AddToCartButton/AddCartButton';
import { ProductRoot } from '@/types/product.type';
import Image from 'next/image';
import React from 'react'

const ProductDetails = async ({ params }: { params: { id: string } }) => {

  const { id } = await params;

  const product: ProductRoot = await GetSingleProduct(id);
  console.log(product);

  return (
    <div className='w-full px-5 md:w-[80%] md:p-0 mx-auto my-10 flex flex-col md:flex-row items-center'>
      <div className='w-full md:w-1/3'>
        <Image alt={product.title} width={500} height={500} src={product.imageCover} className='w-full' />
      </div>
      <div className='w-full md:w-2/3 m-10 md:m-0 ps-10'>
        <h2 className='text-xl font-bold'>{product.title}</h2>
        <p className='my-5'>{product.description}</p>
        <p className='my-5'>{product.category.name}</p>
        <div className="w-full flex flex-row justify-between items-center">
          <p>{product.price} EGP</p>
          <p>{product.ratingsAverage} <i className="fa-solid fa-star text-yellow-300"></i></p>
        </div>

        <AddCartButton id={product._id} />
      </div>
    </div>
  )
}

export default ProductDetails
