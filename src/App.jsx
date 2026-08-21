import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router"

import ProductListing from "./pages/ProductListing";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import {CartProvider} from "./context/CartProvider";
import CartDetailPage from "./pages/CartDetailPage";
import { useState } from "react";

const routes = createBrowserRouter([
  {
    path:"/",
    element:"Home page"
  },
  {
    path:"/products",
    element:<ProductListing/>
  },
  {
    path:"/products/:id",
    element:<ProductDetailsPage/>
  },
  {
    path:"/cart",
    element:<CartDetailPage/>
  },

])


function App() {
  
   const [cartProducts,setCartProducts] = useState([]);

  return (
    <>
    <CartProvider cartproducts={cartProducts} setCartProducts={setCartProducts}>
     <RouterProvider router={routes}/>
     {/* <CartDetailPage/> */}
     </CartProvider>
     
    </>
  )
  
}

export default App;

  

 