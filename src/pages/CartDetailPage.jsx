import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";
import CartProductItem from "../component/CartProductItem";

const CartDetailPage = () => {
    const {cartproducts} = useContext(CartContext)
    const [products, setProducts] = useState([])
    const [total,setTotal] = useState(0)

     useEffect(()=>{
        const fetchData = async ()=>{
            const fetchPromises = cartproducts.map(async(item)=>{
                var response = await fetch('https://dummyjson.com/products/'+item.id);
                // response = {...response.json(),qty:item.qty}
                response = await response.json()  
                // response = {...response,qty:item.qty}
                response.qty = item.qty
                // setTotal(((response.qty*response.price)))
                return response
            })

            const result = await Promise.all(fetchPromises);
            console.log(result)
            setProducts(result)

        }

        fetchData()
        
     },[cartproducts])
      
             
    
   
    return ( <>
         <div className="container">
            <div className="row">
                <div className="col-9">
                    <h4>products</h4>
                    <hr />
                    <div className="product-container">
                        {
                            products.map(product=>(
                               <CartProductItem product={product} setProducts={setProducts}/>
                            ))
                        }
                    </div>
                </div>
                <div className="col-3">
                    <h4>summary:</h4>
                    <hr />
                    <p>Total: {total}</p>
                </div>
            </div>
         </div>
        
    </> );
}
 
export default CartDetailPage;