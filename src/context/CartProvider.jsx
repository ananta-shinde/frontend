import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {
    const [cartProducts,setCartProducts] = useState([]);
    return ( <>
       <CartContext value={{cartProducts,setCartProducts}}>
         {children}
         </CartContext>
    </> );
}
 
