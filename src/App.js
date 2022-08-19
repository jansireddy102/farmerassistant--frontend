import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import './App.css';
import Dashboard from './component/Dashboard';

import AdminDashboard from './component/AdminDashboard';
import View_profile from './component/View_profile';
import Login from './component/login';
import Signup from './component/signup';

import Plant from "./component/Plant/Plant";
import Seed from "./component/Seed/Seed";
import Add from "./component/Plant/Add";
import PlantViewAll from "./component/Plant/PlantViewAll";
import Delete from "./component/Plant/Delete";
import Update from "./component/Plant/Update";
import SeedViewAll from "./component/Seed/SeedViewAll";
import SeedAdd from "./component/Seed/SeedAdd";
import SeedDelete from "./component/Seed/SeedDelete";
import SeedUpdate from "./component/Seed/SeedUpdate";
import PlanterAdd from "./component/Planter/PlanterAdd";
import PlanterUpdate from "./component/Planter/PlanterUpdate";
import PlanterDelete from "./component/Planter/PlanterDelete";
import PlanterViewAll from "./component/Planter/PlanterViewAll";
import PlanterPlantAdd from "./component/Planter/PlanterPlantAdd";
import Planter from "./component/Planter/Planter";
import About from "./component/About";


const Home = () =>{
    localStorage.clear();
  return(
      <div className='bg-home'>
        
          <h2 className='texth1'>“A good farmer is nothing more nor less than a handy man with a sense of humus".</h2>
          <div >
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
  
          <div className='box1'>
          <p><b>ABOUT US</b><br></br><br></br> All the benefits that come with selling here are designed to help you sell more, and make it easier to grow your business.
          </p>
          </div>  
         
          </div>
  
  
  );
  }


class App extends Component {  
  constructor(props){
      super(props);
      this.state={
          loggedIn :false
      } 
  }
  render() {  
     
      return (
          <Router>
              <header class="header">
		<h1 class="logo"><a href="#">Farmer Assistant</a></h1>
      <ul class="main-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/signup">Signup</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/about">about</a></li>
          
          
          
      </ul>
	</header> 
                  <br/>
                  <Routes>
                      <Route exact path="/" element={<Home/>} />
                      <Route exact path="/login" element={<Login/>}/> 
                      <Route exact path="/signup/" element={<Signup/>} />
                      <Route exact path={"/About"} element={<About/>}/>
                       <Route exact path={"/FarmerCart/cart"}element={<cart/>}/>
                      <Route exact path="/login/Dashboard/" element={<Dashboard/>} /> 
                      <Route exact path="/login/AdminDashboard"  element={<AdminDashboard/>} /> 
                      <Route exact path="/user/view_profile" element={<View_profile/>} />
                      <Route path={"/admin/plant"} element={<Plant/>}/>
                      <Route path={"/admin/Seed"} element={<Seed/>}/>
                      <Route path={"/admin/Planter"} element={<Planter/>}/>
                      <Route exact path={"/Plant/PlantViewAll"} element={<PlantViewAll/>}/>
                      <Route exact path={"/Plant/Add"} element={<Add/>}/>
                      <Route exact path={"/Plant/Delete"} element={<Delete/>}/>
                      <Route exact path={"/Plant/Update"} element={<Update/>}/>
                      <Route exact path={"/Seed/SeedViewAll"} element={<SeedViewAll/>}/>
                      <Route exact path={"/Seed/SeedAdd"} element={<SeedAdd/>}/>
                      <Route exact path={"/Seed/SeedDelete"} element={<SeedDelete/>}/>
                      <Route exact path={"/Seed/SeedUpdate"} element={<SeedUpdate/>}/>
                      <Route exact path={"/Planter/Add"} element={<PlanterAdd/>}/>
                      <Route exact path={"/Planter/Update"} element={<PlanterUpdate/>}/>
                      <Route exact path={"/Planter/Delete"} element={<PlanterDelete/>}/>
                      <Route exact path={"/Planter/ViewAll"} element={<PlanterViewAll/>}/>
                      <Route exact path={"/Planter/PlanterPlantAdd"} element={<PlanterPlantAdd/>}/>
                      <Route exact path={"/Planter/PlanterPlantAdd"} element={<PlanterPlantAdd/>}/>
                      <Route exact path={"/About"} element={<About/>}/>

                  </Routes>
                  s
              
          </Router>
      );
  }
}

export default App;