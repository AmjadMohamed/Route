"use client"

import { cartContext } from '@/context/CartContext'
import React, { useContext } from 'react'
import Loading from '../loading';
import { Button } from '@/components/ui/button';
import { ProductCart } from '@/types/cart.type';
import Image from 'next/image';
import { toast } from 'sonner';
import { Loader2Icon } from 'lucide-react';

const Cart = () => {

  const { isLoading, totalCartPrice, products, removeCartItem, updateCartItemQuantity, isItemQuantityLoading, clearCart } = useContext(cartContext);

  async function removeItem(id: string) {
    const data = await removeCartItem(id);

    if (data.status === "success") {
      toast.success("Item removed successfully", {
        position: "top-center",
        duration: 3000,
        icon: <i className="fa-solid fa-circle-check text-green-500"></i>
      });
    }
    else {
      toast.error("Failed to remove item", {
        position: "top-center",
        duration: 3000,
        icon: <i className="fa-solid fa-circle-xmark text-red-500"></i>
      })
    }

    console.log("deleted: " + data);
  };

  async function updateItemQuantity(id: string, count: number) {
    const data = await updateCartItemQuantity(id, count);

    if (data.status === "success") {
      toast.success("Item Quantity updated successfully", {
        position: "top-center",
        duration: 3000,
        icon: <i className="fa-solid fa-circle-check text-green-500"></i>
      });
    }
    else {
      toast.error("Failed to update quantity", {
        position: "top-center",
        duration: 3000,
        icon: <i className="fa-solid fa-circle-xmark text-red-500"></i>
      })
    }

    console.log("updated: " + data);
  };

  if (isLoading) {
    return <Loading />
  }

  if (products.length == 0) {
    return <div className='h-screen w-full flex justify-center items-center'>
      <h1 className='text-green-600 font-bold text-3xl'>Oops, we could not find any items to show</h1>
    </div>
  }

  return (
    <div className='w-full md:w-[80%] mx-auto my-10 px-5 md:[px-0] bg-slate-100'>
      <div className='p-5'>
        <h1 className='text-2xl font-bold'>Shop Cart</h1>
        <p className='my-4 font-mono text-green-500'>Total Price: {totalCartPrice} EGP</p>
        <Button className='mb-10 cursor-pointer' onClick={clearCart}>Clear Cart</Button>

        <div className='mt-7'>
          {products.map(function (product: ProductCart, idx: number) {
            return <div key={idx} className='flex items-center justify-between py-3 border-b-[1px] border-green-500'>
              <div className='flex items-center gap-7'>
                <Image alt={product.product.title} src={product.product.imageCover} height={150} width={150} />

                <div>
                  <h1> {product.product.title}</h1>
                  <p className='my-3 text-green-500'>Price: {product.price}</p>
                  <button className='cursor-pointer' onClick={() => { removeItem(product.product._id) }}><i className="fas fa-trash text-green-500"></i> Remove</button>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <button className='w-[30px] h-[30px] cursor-pointer border border-green-500 rounded-md font-bold' onClick={() => updateItemQuantity(product.product._id, product.count - 1)}> - </button>
                <p className='font-bold'>{isItemQuantityLoading === product.product._id ? <Loader2Icon className="animate-spin" /> : product.count}</p>
                <button className='w-[30px] h-[30px] cursor-pointer border border-green-500 rounded-md font-bold' onClick={() => updateItemQuantity(product.product._id, product.count + 1)}> + </button>
              </div>

            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
