"use client"

import { SessionProvider } from 'next-auth/react'
import React from 'react'
import CartContextProvider from './context/CartContext'
import WishlistContextProvider from './context/WishlistContext'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <SessionProvider>
                <CartContextProvider>
                    <WishlistContextProvider>
                        {children}
                    </WishlistContextProvider>
                </CartContextProvider>
            </SessionProvider>
        </div>
    )
}

export default Providers
