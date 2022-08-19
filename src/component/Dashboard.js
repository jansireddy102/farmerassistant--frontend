import React from 'react';
import './style/sidebar.css'
import { Route, Link,  Routes} from "react-router-dom";
import Login from "./login";


const Dashboard = () => {
        return(
            <div className="Heading">
             <h2>Welcome {localStorage.getItem("username")}</h2>

             <div className="container-sidebar">
        

            <ul className="sidebar">
                
            <li><span>USER PAGE</span></li>
            <li><span></span><span><Link to="/user/view_profile" style={{ textDecoration: 'none'}} >View profile</Link></span></li>
           
            <li><span></span><span><Link to="/login" style={{ textDecoration: 'none'}}>Logout</Link></span></li>
           
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

export default Dashboard;