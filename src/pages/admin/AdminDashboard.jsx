import { Outlet } from "react-router";
import ProductManagement from "./ProductManagement";
import AdminProductList from "./ProductManagement";


const AdminDashboard = () => {
    return ( <>
    <div className="container-fluid">
        <nav className="d-flex justify-content-between border-bottom border-dark p-2">
            <h4>SHOPKART</h4>
            <ul className="list-unstyled d-flex">
                <li>settings</li>
                <li><button className="btn btn-primary">logout</button></li>
            </ul>
        </nav>
        <div className="row">
            <div className="col-3 border" style={{height:"100vh"}}>
                <h4>Admin Dashboard</h4>
                <ul className="list-group">
                    <li className="list-group-item active">products</li>
                    <li className="list-group-item">categories</li>
                    <li className="list-group-item">brands</li>
                    <li className="list-group-item">orders</li>
                    <li className="list-group-item">users</li>
                    <li className="list-group-item">home page config</li>
                </ul>
            </div>
            <div className="col">
              {<Outlet/>}
            </div>
        </div>
    </div>
    </> );
}
 
export default AdminDashboard;