"use client"

import Link from 'next/link'
import React, { useContext } from 'react'
import logoImg from "./../../../../public/Assets/screens/freshcart-logo.svg"
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { cartContext } from '@/context/CartContext'
import { Badge } from '@/components/ui/badge'

const Navbar = () => {

  const { data: session, status } = useSession();

  const { numOfCartItems } = useContext(cartContext);


  return (
    <div className='bg-slate-100 py-5'>
      <div className='w-full md:w-[80%] mx-auto flex flex-col md:flex-row text-center justify-between items-center'>
        <ul className='flex flex-col md:flex-row text-center items-center gap-6'>

          {status === "authenticated" && <>
            <li>
              <Link href={"/"}>
                <Image src={logoImg} alt='logo icon' />
              </Link>
            </li>

            <li>
              <Link href={"/"}>
                Home
              </Link>
            </li>

            <li className='relative'>
              <Link href={"/cart"}>
                Cart

                {numOfCartItems > 0 ? (
                  <Badge className="w-1 h-4 text-[10px] absolute top-[-45%] bg-green-500">
                    {numOfCartItems}
                  </Badge>
                ) : null}

              </Link>
            </li>

            <li>
              <Link href={"/products"}>
                Products
              </Link>
            </li>

            <li>
              <Link href={"/categories"}>
                Categories
              </Link>
            </li>

            <li>
              <Link href={"/brands"}>
                Brands
              </Link>
            </li>
          </>}

          {status === "loading" && <>
            <h1>Loading...</h1>
          </>}

          {status === "unauthenticated" && <Image src={logoImg} alt='logo icon' />
          }
        </ul>

        <div className='flex flex-col md:flex-row text-center items-center gap-2'>

          <div>
            <i className='fab mx-2 fa-instagram'></i>
            <i className='fab mx-2 fa-facebook'></i>
            <i className='fab mx-2 fa-tiktok'></i>
            <i className='fab mx-2 fa-twitter'></i>
            <i className='fab mx-2 fa-linkedin'></i>
            <i className='fab mx-2 fa-youtube'></i>
          </div>

          {status === "authenticated" && <>
            <div>
              <button className='cursor-pointer' onClick={() => signOut({
                callbackUrl: "/signin"
              })}>
                SignOut
              </button>
            </div>
          </>}

          {status === "unauthenticated" && <>
            <div>
              <Link href="/signin">
                SignIn
              </Link>
            </div>
            <div>
              <Link href="/signup">
                SignUp
              </Link>
            </div>
          </>}


        </div>

      </div>
    </div>
  )
}

export default Navbar
