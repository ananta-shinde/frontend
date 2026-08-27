import { useContext, useState } from "react";
import { CartContext } from "../context/CartProvider";

const CartProductItem = (props) => {
     const {cartproducts,setCartProducts} = useContext(CartContext);
    const handleQtyChange = (event)=>{
        if(event.target.id == "increment"){
                setCartProducts((prevState)=>prevState.map(item=>item.id == props.product.id?{...item,qty:item.qty+1} :item))
        }else{
             setCartProducts((prevState)=>prevState.map(item=>item.id == props.product.id && props.product.qty>1?{...item,qty:item.qty-1} :item))
        }
    }

    const handleDelete = (id)=>{
       setCartProducts(cartproducts.filter(product=>product.id != id))
    }
    return (  
            <div className="cart-product-item card p-4">
                                <div className="row">
                                    <div className="col">
                                        <img className="" width={"150px"} src={props.product.thumbnail}/>
                                    </div>
                                    <div className="col-6">
                                        <h3>{props.product.title}</h3>
                                        <div>
                                            <button id="increment" className="btn btn-warning" onClick={handleQtyChange}>+</button>
                                            <input type="text" readOnly value={props.product.qty}/>
                                            <button id="decrement" className="btn btn-warning" onClick={handleQtyChange}>-</button>
                                        </div>
                                        <button class="btn btn-danger btn-sm my-5" onClick={()=>handleDelete(props.product.id)}>remove</button>
                                    </div>
                                    <div className="col">
                                        <p className="fs-2 text-end">{props.product.price*props.product.qty}</p>
                                    </div>
                                </div>
                                </div>
                                 );
}
 
export default CartProductItem;