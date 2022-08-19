import React from "react";
import { Routes } from "react-router-dom";
import { Route, Link,} from "react-router-dom";
import './style/sidebar.css'
import Login from "./login";

const AdminDashboard = () => {
    return(
        <div className="Heading"  >
         <h2>Welcome User {localStorage.getItem("username") }</h2>

         <div className="container-sidebar">
        

        <ul className="sidebar">
    
            
           
            <li><span></span><span><Link to='/admin/plant' style={{ textDecoration: 'none' }} >Plant Management</Link></span></li>
            <li><span></span><span><Link to='/admin/Seed' style={{ textDecoration: 'none' }}>Seed Management</Link></span></li>
            {/*<li><span></span><span><Link to="/admin/view_alluser"></Link></span></li>*/}
            <li><span></span><span><Link to="/admin/Planter" style={{ textDecoration: 'none' }}>Planter Management</Link></span></li>
            <li><span></span><span><Link to="/user/view_profile" style={{ textDecoration: 'none' }}>User Management</Link></span></li>
            <li><span></span><span><Link to="/login" style={{ textDecoration: 'none' }}>Logout</Link></span></li>
            
            <Routes>
                <Route exact path="/login" component={Login} />
            </Routes>

        </ul>

        <div className="content">

        </div>
    </div>
        </div>
    );
}

export default AdminDashboard;