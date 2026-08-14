import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router"

import ProductListing from "./pages/ProductListing";
import ProductDetailsPage from "./pages/ProductDetailsPage";

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
    element:"cart page"
  },

])


function App() {
  

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
  
}

export default App;

  

 