import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetailsPage = () => {

    const {id} = useParams();
    const [product,setproduct] = useState({})
    const [previewImage,setPreviewImage] = useState("")

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
    return ( 
        <div className="container">
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
                    <div className="d-flex">
                        <button className="btn btn-warning me-2" style={{flex:1}}>Buy Now</button>
                        <button className="btn btn-outline-dark" style={{flex:1}}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetailsPage;