import { useEffect, useState } from "react";

const ProductListing = () => {

    // create an empty array to save products
    const [products,setproducts] = useState([]);


    useEffect(()=>{
          fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res =>{
                setproducts(res.products)
            });
    
    },[])

 
    return (  
        <>
          {
            products.map(product=>(
               <div className="card my-2 p-4">
                   <div className="row">
                     <div className="col-3">
                        <img src={product.thumbnail}/>  
                     </div>
                     <div className="col">
                        <h3>{product.title}</h3>
                        <p>{"rating:"+ product.rating}</p>
                        <p>{product.description}</p>
                        <div>
                            {
                                product.tags.map(item=>(
                                    <span className="badge bg-warning mx-2">{item}</span>
                                ))
                            }
                        </div>
                     </div>
                     <div className="col-2 text-end">
                          <p className="fs-2">${product.price}</p>
                          <button className="btn btn-warning">Add to cart</button>
                     </div>
                   </div>
               </div>
            ))
          }
        </>
    );
}
 
export default ProductListing;