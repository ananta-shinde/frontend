import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const ProductListing = () => {

    // create an empty array to save products
    const [originalproducts,setOriginalProducts] = useState([]);
    const [products,setproducts] = useState([]);
    const targetRefForLazyLoad = useRef(null);
    const [pageno,setPageNo] = useState(1);
    const [isIntersecting, setIsIntersecting] = useState(false);



    useEffect(()=>{
          fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res =>{
                setproducts(res.products)
                setOriginalProducts(res.products)
            });       
    },[])

    

     useEffect(() => {
    // 1. Define configuration options
    const options = {
      root: null,       // Defaults to the browser viewport
      rootMargin: '0px', // Margin around the root
      threshold: 0.2,    // Trigger when 20% of the element is visible
    };

    // 2. Define the callback executed when visibility changes
    const callback = (entries) => {
      const [entry] = entries; 
      setIsIntersecting(entry.isIntersecting);
       fetch('https://dummyjson.com/products?limit=30&skip='+pageno*30)
        .then(res => res.json())
        .then(res =>{
            
                setproducts([...products,...res.products])
                setPageNo(pageno+1)
                // setOriginalProducts(res.products)
            });    
      
    };

    // 3. Instantiate the observer
    const observer = new IntersectionObserver(callback, options);

    // 4. Start observing the target DOM element
    if (targetRefForLazyLoad.current) {
      observer.observe(targetRefForLazyLoad.current);
    }

   
  }, [setIsIntersecting]); // Empty dependency array ensures observer is created once
    
               
   
        
     
   


    const handlePriceFilterChange = (event)=>{
         var value = event.target.value
        
        if(value == "asc"){
            var filteredProducts = [...products].sort((a,b)=>a.price-b.price)
            setproducts(filteredProducts)
             
        }else if(value == "desc"){
            var filteredProducts = [...products].sort((a,b)=>b.price-a.price)
            setproducts(filteredProducts)
        }else{
            
        }
    }

    const handleSearch = (event)=>{

        var value = event.target.value
        if(value != ""){
            setproducts([...originalproducts].filter(product=>(product.title.toLowerCase().includes(value.toLowerCase().trim()))))
        }else{
            setproducts(originalproducts)
        }
        
    }



 
    return (  
        <>
        <div className="row">
        <div className="col-3 p-4 position-fixed">
            <h4 className="my-4">filters</h4>
        </div>
        <div className="p-4 offset-3 col-9" >
          <div className="d-flex justify-content-between py-4">
            <h4>Product List</h4>
            <div className="d-flex">
                <select className="form-select  mx-2" onChange={handlePriceFilterChange}>
                    <option value="">-- select sort filter --</option>
                    <option value="asc">price low to high</option>
                    <option value="desc">price high to low</option>
                </select>
                <input className="  form-control"  type="text" onChange={handleSearch} placeholder="search product here"/>
            </div>
          </div>
          
          {
            products.map(product=>(
               <div className="card my-2 p-4">
                <Link className="text-dark text-decoration-none" to={"/products/"+product.id}>
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
                   </Link>
               </div>
            ))
          }
          {<p className="alert alert-danger" ref={targetRefForLazyLoad}> no more product to show</p>
          }
        </div>
        </div>
        </>
    );
}
 
export default ProductListing;