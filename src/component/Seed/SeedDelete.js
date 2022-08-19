import React from "react";
import axios from "axios";
import {Button} from "@mui/material";
import './Seed.css'

export default class SeedDelete  extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            seedId:''
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
        const seed={
            seedId : this.state.seedId,
        };
        var x = localStorage.getItem("seedId");
        console.log(x);
        axios.delete('http://localhost:8081/seed/delete/'+ x,seed)
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
                        <label >seedId<br></br></label>
                        <input type="number" name="seedId" onChange={this.handleChange} className="form-control" id="seedId2"  value={this.state.seedId} required
                        />
                        {localStorage.setItem("seedId",this.state.seedId)}
                    </div>
                </div>
                <div >
                    <div>
                        <br></br><Button type ="submit" className="btn2" variant="contained">Remove Seed</Button>
                    </div>
                </div>
            </form>
        )
    }
}