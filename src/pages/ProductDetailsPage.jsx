import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { CartContext } from "../context/CartProvider";

const ProductDetailsPage = () => {

    const {id} = useParams();
    const [product,setproduct] = useState({})
    const [previewImage,setPreviewImage] = useState("")
    const [activeTab,setActiveTab] = useState("specifications")
    const {cartproducts,setCartProducts} = useContext(CartContext)

    useEffect(()=>{
        fetch('https://dummyjson.com/products/'+id)
        .then(res => res.json())
        .then(res=>{
             setproduct(res)
             setPreviewImage(res.images[0])
        });
    },[])

    const handleThumbnailClick = (event)=>{
            // console.log(event.target.src)
            setPreviewImage(event.target.src)
    }

    const handleAddToCart = (id)=>{
        const isExist = cartproducts.some(product=>product.id == id);
            if(isExist){
                    cartproducts.map(product=> {
                        if(product.id == id){
                            product.qty = product.qty +1
                        }
                    })
                    setCartProducts(cartproducts)
            }else{
                setCartProducts([...cartproducts,{id:product.id,qty:1}])
            }
        }
        
    return ( 
        <div className="container">
            <Link to="/cart">go to cart</Link>
            <div className="row align-items-center" style={{height:"80vh"}}>
                <div className="col" style={{alignSelf:"flex-start"}}>
                    
                    <img src={previewImage} style={{width:"400px",objectFit:"cover"}}/>
                    <div>
                        {product.images && product.images.length>1 && product.images.map((img,index)=>(<img id={index} className="img-thumbnail mx-3" style={{width:"100px"}} onClick={handleThumbnailClick} src={img}/>))}
                    </div>
                </div>
                <div className="col">
                    <h2>{product.title}</h2>
                    <p>{product.rating}</p>
                    <p>{product.description}</p>
                    <p className="fs-2">${product.price}</p>
                    <h5 className="text-muted">Hightlights :</h5>
                    <ul>
                        <li>product Highlights items</li>
                        <li>product Highlights items</li>
                        <li>product Highlights items</li>
                        <li>product Highlights items</li>
                        <li>product Highlights items</li>
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-warning me-2" style={{flex:1}}>Buy Now</button>
                        <button className="btn btn-outline-dark" style={{flex:1}} onClick={()=>handleAddToCart(product.id)}>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className="row border">
                <ul className="list-unstyled d-flex tab-nav border">
                    <li className={"mx-2 tab-item "+ ((activeTab == "specifications")?"active text-warning":"")} onClick={()=>{setActiveTab("specifications")}}>specicifactions</li>
                    <li className={"mx-2 tab-item "+ ((activeTab == "warranty")?"active text-warning":"")} onClick={()=>{setActiveTab("warranty")}}>warranty info</li>
                    <li className={"mx-2 tab-item "+ ((activeTab == "reviews")?"active text-warning":"")} onClick={()=>{setActiveTab("reviews")}}>reviews</li>
                </ul>
                {activeTab == "specifications" && <div className="w-50">
                    <div className="row border-bottom py-2">
                        <div className="col-2">Ram</div>
                        <div className="col">:512GB</div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-2">Ram</div>
                        <div className="col">:512GB</div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-2">Ram</div>
                        <div className="col">:512GB</div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-2">Ram</div>
                        <div className="col">:512GB</div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-2">Ram</div>
                        <div className="col">:512GB</div>
                    </div>
                    <div className="row border-bottom py-2">
                        <div className="col-2">Ram</div>
                        <div className="col">:512GB</div>
                    </div>
                </div>}
                { activeTab == "reviews" && <div>
                    {
                        product.reviews && product.reviews.map(review=>(
                            <div className="p-4">
                                <p className="fw-bold">{review.reviewerName}</p>
                                <p>{review.rating}</p>
                                <p>{review.comment}</p>
                                <p>{review.date}</p>
                                <hr></hr>
                            </div>
                        ))
                    }
                </div>}
            </div>
        </div>
     );
}
 
export default ProductDetailsPage;