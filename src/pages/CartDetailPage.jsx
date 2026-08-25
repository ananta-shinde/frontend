import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";

const CartDetailPage = () => {
    const {cartproducts} = useContext(CartContext)
    const [products, setProducts] = useState([])



    const fetchCartProducts = async()=>{
           console.log(cartproducts)
            const requests = cartproducts.map((id)=>{
            fetch('https://dummyjson.com/products/'+id)
            .then(res => res.json())
            })
        const result =await Promise.all(requests)
         return result
        }

    useEffect(()=>{
        const getData = () => {
    const data = fetchCartProducts();
    console.log(data)
    setProducts(data);
        }
        
    getData()

             
    },[])
   
    return ( <>
    
         {
            products.map(product=>(<h1>{product.title}</h1>))
         }
    </> );
}
 
export default CartDetailPage;