import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const CartDetailPage = () => {
    const {cartproducts} = useContext(CartContext)
    return ( <>
        {
           cartproducts && cartproducts[0].title
        }
    </> );
}
 
export default CartDetailPage;