import { Outlet } from "react-router";
import AddNewProduct from "./products/AddNewProduct";
import ProductDataList from "./products/ProductDataList";

const ProductManagement = () => {
    return ( <>
        <div className="container">
            <div className="card p-4 my-2">
                <h4>Welcome to product management tool</h4>
                <p>This page helps you manage product catelogs</p>
            </div>
           <div>
            {<Outlet/>}
           </div>
        </div>
    </> );
}
 
export default ProductManagement;