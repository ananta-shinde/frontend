import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const CartProvider = ({cartproducts,setCartProducts,children}) => {
   
     
    return ( <>
       <CartContext value={{cartproducts,setCartProducts}}>
         {children}
         </CartContext>
    </> );
}
 
