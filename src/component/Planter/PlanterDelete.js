import React from "react";
import axios from "axios";
import {Button} from "@mui/material";
import './planter.css'

export default class PlanterDelete  extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            planterId:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
            redirect:false
        });
    }
    handleSubmit(event){
        event.preventDefault();
        const order={
            planterId : this.state.planterId,
        };
        var x = localStorage.getItem("planterId");
        console.log(x);
        axios.delete('http://localhost:8081/planter/delete?id='+ x,order)
            .then(res=>{
                console.log(res.data)
                alert("Deleted")
            })
            .catch((er)=>alert("can't delete"))
    }
    render() {
        return(
            <form  ref="form" onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <label >planterId<br></br></label>
                        <input type="number" name="planterId" onChange={this.handleChange} className="form-control" id="planterId2" placeholder="planterId Id" value={this.state.planterId} required
                        />
                        <br></br>
                        {localStorage.setItem("planterId",this.state.planterId)}
                    </div>
                </div>
                <div >
                    <div>
                        <Button type ="submit" className="btn2" variant="contained">Remove Order</Button>
                    </div>
                </div>
            </form>
        )
    }
}