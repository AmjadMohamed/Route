"use client"

import React, { useContext } from 'react'
import { wishlistContext } from '@/context/WishlistContext'

const WishlistHeart = ({ productId }: { productId: string }) => {
    const { isInWishlist, toggleWishlist } = useContext(wishlistContext);

    return (
        <button
            onClick={() => toggleWishlist(productId)}
            className='rounded-full bg-grey-300 p-2 hover:bg-gray-200 transition-colors'
        >
            <i className={`fa-heart text-2xl ${isInWishlist(productId) ? 'fa-solid text-red-500' : 'fa-regular text-gray-300'}`}></i>
        </button>
    )
}

export default WishlistHeart