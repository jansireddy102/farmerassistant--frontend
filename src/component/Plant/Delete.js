import React from "react";
import axios from "axios";
import {Button} from "@mui/material";
import './plant.css'

export default class Delete  extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            plantId:''
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
        const plant={
            plantId : this.state.plantId,
        };
        var x = localStorage.getItem("plantId");
        console.log(x);
        axios.delete('http://localhost:8080/plant/delete/'+ x,plant)
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
                        <label >plantId<br></br></label>
                        <input type="number" name="plantId" onChange={this.handleChange} className="form-control" id="plantId2" placeholder="User Name" value={this.state.plantId} required
                        />
                        <br></br>
                        {localStorage.setItem("plantId",this.state.plantId)}
                    </div>
                </div>
                <div >
                    <div>
                        <br></br><Button type ="submit" className="btn2" variant="contained">Remove Diagnostic center</Button>
                    </div>
                </div>
            </form>
        )
    }
}