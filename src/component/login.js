import * as React from "react";
import axios from 'axios';
import {Navigate} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import Button from '@mui/material/Button';
import './style/signup.css'

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
        
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value,
            Redirect: false
        });
    }
    handleSubmit(event){
        event.preventDefault();
        const user = {
            
            username : this.state.username,
            password : this.state.password
        };
        console.log(user);
    
        axios.post(`http://localhost:8081/User/login`,user)
            .then(response => {
                alert("sussesful");
                return response.data
                
             })
             .then(data => {
                console.log(data)
             })
             .then(() =>this.setState({ redirect: true }))
             
             .catch(error => {
                console.log(error.response.data.error)
                alert("wrong credentials");
             })
}
 
    render(){
        const { redirect } = this.state;
        if (redirect) {
            console.log("");
            if(this.state.username==="new" & this.state.password==="1234"){
                return <Navigate to='/login/AdminDashboard'/>;
            }
            return <Navigate to="/login/Dashboard/"></Navigate>
        }
        return(
            <form  ref="form" onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <label >User Name<br></br></label>
                         <input type="text" name="username" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" placeholder="User Name"  value={this.state.username} required />
                      
                    </div>
                </div>
                <div>
                    <div>
                        <label>Password<br></br></label>
                        <input type="password" name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} required/>
                    </div>
                </div>

                <br/>
                <div>
                    <div>
                        <Button type ="submit" variant="contained">Log In</Button>
                    </div>
                </div>
                <br></br>
                <label>Not register signup</label>
                <li><Link to="/signup1"><button >click here</button></Link></li>
            </form>

        )
    }
}