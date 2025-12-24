/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export const CartProvider=createContext();

const CartContext = ({children}) => {
    const[cart,setCart]=useState(()=>{
         try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      localStorage.removeItem("cart");
      console.log(error)
      return [];
    }
    });

    useEffect(()=>{
      localStorage.setItem('cart',JSON.stringify(cart))

    },[cart])

    const addToCart=(product)=>{
        setCart([...cart,product])
    }
    const removeItem=(id)=>{
      setCart(cart.filter(item=>item.id!==id))
    }

    const cartInfo={addToCart,cart,removeItem}


    return (
        <CartProvider.Provider value={cartInfo}>
            {children}
        </CartProvider.Provider>
    );
};

export default CartContext;