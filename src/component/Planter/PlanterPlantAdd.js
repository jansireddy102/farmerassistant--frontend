import React from "react";
import axios from "axios";
import {Button} from "@mui/material";
import './planter.css'

export default class PlanterPlantAdd  extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            plantId:'',
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
        const planter={
            plantId : this.state.plantId,
            planterId:this.state.planterId
        };
        var x = localStorage.getItem("plantId");
        var y = localStorage.getItem("planterId");

        console.log(x);
        console.log(y);

        axios.post('http://localhost:8080/planter/addPlant?plantId='+ x+'&planterId='+y,planter)
            .then(res=>{
                console.log(res.data)
                alert("plant added to planter")
            })
            .catch((er)=>alert("can't add"))
    }
    render() {
        return(
            <form  ref="form" onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <label >Plant Id</label>
                        <input type="number" name="plantId" onChange={this.handleChange} className="form-control" id="plantId2" placeholder="Plant Id" value={this.state.plantId} required
                        />
                        {localStorage.setItem("plantId",this.state.plantId)}
                    </div>
                    <div>
                        <label >planter Id</label>
                        <input type="number" name="planterId" onChange={this.handleChange} className="form-control" id="planterId2" placeholder="Planter Id" value={this.state.planterId} required
                        />
                        {localStorage.setItem("planterId",this.state.planterId)}
                    </div>
                </div>
                <div >
                    <div>
                        <Button type ="submit" className="btn2" variant="contained">Planter Plant Add</Button>
                    </div>
                </div>
            </form>
        )
    }
}