"use client"

import { cashPaymentAction } from '@/apis/PaymentActions/cashPayment'
import { onlinePaymentAction } from '@/apis/PaymentActions/onlinePayment'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cartContext } from '@/context/CartContext'
import { useRouter } from 'next/navigation'
import React, { useContext, useRef } from 'react'
import { toast } from 'sonner'

const Payment = () => {

  const router = useRouter();
  const { cartId, ResetDataAfterPayment } = useContext(cartContext);



  const details = useRef("");
  const phone = useRef("");
  const city = useRef("");

  async function cashPayment() {

    const values = {
      shippingAddress: {
        "details": details.current?.value,
        "phone": phone.current?.value,
        "city": city.current?.value
      }
    }

    try {
      const data = await cashPaymentAction(cartId, values);


      toast.success(data.status, {
        position: "top-center",
        duration: 3000,
        icon: <i className="fa-solid fa-circle-check text-green-500"></i>
      });

      ResetDataAfterPayment();
      router.push("/allorders");
      console.log(`payment ${data}`);

    }
    catch (error) {

      toast.error("Failed", {
        position: "top-center",
        duration: 3000,
        icon: <i className="fa-solid fa-circle-xmark text-red-500"></i>
      })

      console.log(error);
    }
  }

  async function onlinePayment() {

    const values = {
      shippingAddress: {
        "details": details.current?.value,
        "phone": phone.current?.value,
        "city": city.current?.value
      }
    }

    console.log(`cartID: ${cartId}`);

    try {
      const data = await onlinePaymentAction(cartId, values);
      console.log(data);

      toast.success(data.status, {
        position: "top-center",
        duration: 3000,
        icon: <i className="fa-solid fa-circle-check text-green-500"></i>
      });

      if (data.status === "success") {
        window.location.href = data.session.url;
      }

    }
    catch (error) {

      toast.error("Failed", {
        position: "top-center",
        duration: 3000,
        icon: <i className="fa-solid fa-circle-xmark text-red-500"></i>
      })

      console.log(error);
    }
  }

  return (
    <div className='md:w-1/2 w-full md:px-0 px-5 my-10 mx-auto'>
      <h1 className='mb-10 text-center text-3xl font-bold'>Payment</h1>
      <div>
        <label htmlFor='details'>Details</label>
        <Input ref={details} type='text' id="details" className='mb-4' />

        <label htmlFor='phone'>Phone</label>
        <Input ref={phone} type='tel' id="phone" className='mb-4' />

        <label htmlFor='city'>City</label>
        <Input ref={city} type='text' id="city" className='mb-5' />

        <Button className='bg-green-500 cursor-pointer' onClick={cashPayment}>Cash Payment</Button>
        <Button className='ms-5 bg-green-500 cursor-pointer' onClick={onlinePayment}>Online Payment</Button>
      </div>
    </div>
  )
}

export default Payment
