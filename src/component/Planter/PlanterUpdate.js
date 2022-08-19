import React from "react";
import axios from "axios";
import {Button} from "@mui/material";
import './planter.css'
export default class PlanterUpdate  extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            planterTd:'',
            drainageHoles:'',
            planterCapacity:'',
            planterColor:'',
            planterCost:'',
            planterHeight:'',
            planterShaper:'',
            planterStock:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event){
        event.preventDefault();
        const planter ={
            planterId:this.state.planterId,
            drainageHoles:this.state.drainageHoles,
            planterCapacity:this.state.planterCapacity,
            planterColor:this.state.planterColor,
            planterCost:this.state.planterCost,
            planterHeight:this.state.planterHeight,
            planterShaper:this.state.planterShaper,
            planterStock:this.state.planterStock
        };
        // console.log(planter);
        var x= localStorage.getItem("planterId");
        console.log(x);
        
        axios.post('http://localhost:8081/planter/update?id='+x,planter)
            .then(res=>{
                console.log(res.data)
                alert("Successfully added")
            })
            .catch((er)=>alert("can't add the planter"))
    }
    render() {
        return(
            <form  ref="form" onSubmit={this.handleSubmit}>

                <div>
                    <div>
                        <label >planterId<br></br></label>
                        <input type="number" name="planterId" onChange={this.handleChange} className="form-control" id="planterId1" placeholder="planterId" value={this.state.planterId} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >drainageHoles<br></br></label>
                        <input type="number" name="drainageHoles" onChange={this.handleChange} className="form-control" id="drainageHoles1" placeholder="drainageHoles" value={this.state.drainageHoles} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >planterCapacity<br></br></label>
                        <input type="number" name="planterCapacity" onChange={this.handleChange} className="form-control" id="planterCapacity1" placeholder="planterCapacity" value={this.state.planterCapacity} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >planterColor<br></br></label>
                        <input type="number" name="planterColor" onChange={this.handleChange} className="form-control" id="planterColor1" value={this.state.planterColor} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >planterCost<br></br></label>
                        <input type="number" name="planterCost" onChange={this.handleChange} className="form-control" id="planterCost1" value={this.state.planterCost} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >planterHeight<br></br></label>
                        <input type="number" name="planterHeight" onChange={this.handleChange} className="form-control" id="planterHeight1" value={this.state.planterHeight} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >planterShaper<br></br></label>
                        <input type="text" name="planterShaper" onChange={this.handleChange} className="form-control" id="planterShaper1" value={this.state.planterShaper} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >planterStock<br></br></label>
                        <input type="number" name="planterStock" onChange={this.handleChange} className="form-control" id="planterStock1" value={this.state.planterStock} required />
                    </div>
                </div>
                <div>
                    <div>

                        <Button type ="submit" variant="contained">Submit</Button>

                    </div>
                </div>
            </form>
        )
    }

}