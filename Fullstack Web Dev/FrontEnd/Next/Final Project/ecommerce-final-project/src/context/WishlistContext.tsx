import { addProductToWishlist } from '@/apis/WishlistActions/addProductToWishlist';
import { removeProductFromWishlist } from '@/apis/WishlistActions/removeProductFromWishlist';
import { getUserWishlist } from '@/apis/WishlistActions/getUserWishlist';
import { ProductRoot } from '@/types/product.type';
import React, { createContext, useEffect, useState } from 'react'

export const wishlistContext = createContext({})

const WishlistContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [numOfWishlistItems, setNumOfWishlistItems] = useState(0);
    const [products, setProducts] = useState<ProductRoot[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [wishlistIds, setWishlistIds] = useState<string[]>([]);

    async function addProductToWishlistAction(id: string) {
        try {
            const data = await addProductToWishlist(id);
            getUserWishlistData();
            return data;
        }
        catch (error) {
            console.log(error)
        }
    }

    async function getUserWishlistData() {
        setIsLoading(true);
        try {
            const data = await getUserWishlist();
            setProducts(data.data);
            setNumOfWishlistItems(data.data.length);
            setWishlistIds(data.data.map((product: ProductRoot) => product._id));
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    async function removeWishlistItem(id: string) {
        try {
            const data = await removeProductFromWishlist(id);
            getUserWishlistData();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    function isInWishlist(id: string): boolean {
        return wishlistIds.includes(id);
    }

    function toggleWishlist(id: string) {
        if (isInWishlist(id)) {
            removeWishlistItem(id);
        } else {
            addProductToWishlistAction(id);
        }
    }

    useEffect(function () {
        getUserWishlistData();
    }, [])

    return (
        <wishlistContext.Provider value={{
            numOfWishlistItems,
            products,
            isLoading,
            addProductToWishlist: addProductToWishlistAction,
            removeWishlistItem,
            isInWishlist,
            toggleWishlist,
            getUserWishlistData
        }}>
            {children}
        </wishlistContext.Provider>
    )
}

export default WishlistContextProvider