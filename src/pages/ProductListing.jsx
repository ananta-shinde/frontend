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

    const handlePriceFilterChange = (event)=>{
         var value = event.target.value
        
        if(value == "asc"){
            var filteredProducts = products.sort((a,b)=>a.price-b.price)
            setproducts(filteredProducts)
              console.log(filteredProducts)
        }else if(value == "desc"){

        }else{

        }
    }

 
    return (  
        <>
        <div className="row">
        <div className="col p-4">
            <h4 className="my-4">filters</h4>
        </div>
        <div className="p-4 col-9">
          <div className="d-flex justify-content-between py-4">
            <h4>Product List</h4>
            <div className="d-flex">
                <select className="form-select  mx-2" onChange={handlePriceFilterChange}>
                    <option value="">-- select sort filter --</option>
                    <option value="asc">price low to high</option>
                    <option value="desc">price high to low</option>
                </select>
                <input className="  form-control"  type="text" placeholder="search product here"/>
            </div>
          </div>
          
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
        </div>
        </div>
        </>
    );
}
 
export default ProductListing;