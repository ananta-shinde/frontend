import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartProvider";

const CartDetailPage = () => {
    const {cartproducts} = useContext(CartContext)
    
   
    return ( <>
    
         {
            cartproducts.map(product=>(<h1>{product.title}</h1>))
         }
    </> );
}
 
export default CartDetailPage;