
import React from 'react';
import { BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import axios from 'axios';
import './style/signup.css'


export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Username :'',
            password : '' ,


        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value

        });
    }
    handleSubmit(event){
        event.preventDefault();
        

        const user = {


            password : this.state.password,
            username : this.state.username,

        
        
           

        };
        console.log(user);
        axios.post(`http://localhost:8081/User/register`,user)
            .catch((error) => console.log(error))
           .then(alert("Successfully added"))
            .catch((er)=>alert("user already exists"))

    }
   


    render(){
        return(
            <form class="login" onSubmit={this.handleSubmit}>
                <label>User name</label>
                <br></br>
              <input type="text" name="username" onChange={this.handleChange} className="form-control" id="exampleusername1" placeholder="User Name" value={this.state.username} required/>
              <br></br>
              <label>Password</label>
              <br></br>
              <br></br>
              <input type="password" name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} required />
              <br></br>
              <button>Register</button>
              <li><Link to="/signup1"><button >SIGN UP As farmer</button></Link></li>
              
              

            
                
              </form>
            

        )
    }
}

