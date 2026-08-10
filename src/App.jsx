import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router"

import ProductListing from "./pages/ProductListing";

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
    element:"this is products details page</h1"
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

  

 