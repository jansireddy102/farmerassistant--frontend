import React from "react";
import axios from "axios";
import {Button} from "@mui/material";
import './plant.css'
export default class Update extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            plantId:'',
            plantHeight:'',
            plantSpread:'',
            commonName:'',
            bloomTime:'',
            medicinalOrCulinaryUse:'',
            difficultyLevel:'',
            temperature:'',
            typeOfPlant:'',
            plantDescription:'',
            plantsStock:'',
            plantCost:''
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
        const plant ={
            plantId: this.state.plantId,
            plantHeight:this.state.plantHeight,
            plantSpread:this.state.plantSpread,
            commonName:this.state.commonName,
            bloomTime:this.state.bloomTime,
            medicinalOrCulinaryUse:this.state.medicinalOrCulinaryUse,
            difficultyLevel:this.state.difficultyLevel,
            temperature:this.state.temperature,
            typeOfPlant:this.state.typeOfPlant,
            plantDescription:this.state.plantDescription,
            plantsStock:this.state.plantsStock,
            plantCost:this.state.plantCost
        };
        console.log(plant);
        axios.put('http://localhost:8080/plant/update',plant)
            .then(res=>{
                console.log(res.data)
                alert("Successfully added")
            })
            .catch((er)=>alert("can't add the user"))
    }
    render() {
        return(
            <form  ref="form" onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <label >plantId<br></br></label>
                        <input type="number" name="plantId" onChange={this.handleChange} className="form-control" id="plantId2"  value={this.state.plantId} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >plantHeight<br></br></label>
                        <input type="number" name="plantHeight" onChange={this.handleChange} className="form-control" id="plantHeight1"  value={this.state.plantHeight} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >PlantSpread<br></br></label>
                        <input type="text" name="plantSpread" onChange={this.handleChange} className="form-control" id="plantSpread1"  value={this.state.plantSpread} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >commonName<br></br></label>
                        <input type="text" name="commonName" onChange={this.handleChange} className="form-control" id="commonName1" value={this.state.commonName} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >bloomTime<br></br></label>
                        <input type="text" name="bloomTime" onChange={this.handleChange} className="form-control" id="bloomTime1" value={this.state.bloomTime} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >medicinalOrCulinaryUse<br></br></label>
                        <input type="text" name="medicinalOrCulinaryUse" onChange={this.handleChange} className="form-control" id="medicinalOrCulinaryUse1" value={this.state.medicinalOrCulinaryUse} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >difficultyLevel<br></br></label>
                        <input type="text" name="difficultyLevel" onChange={this.handleChange} className="form-control" id="difficultyLevel1" value={this.state.difficultyLevel} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >temperature<br></br></label>
                        <input type="text" name="temperature" onChange={this.handleChange} className="form-control" id="temperature1" value={this.state.temperature} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >typeOfPlant<br></br></label>
                        <input type="text" name="typeOfPlant" onChange={this.handleChange} className="form-control" id="typeOfPlant" value={this.state.typeOfPlant} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >plantDescription<br></br></label>
                        <input type="text" name="plantDescription" onChange={this.handleChange} className="form-control" id="plantDescription1" value={this.state.plantDescription} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >plantsStock<br></br></label>
                        <input type="number" name="plantsStock" onChange={this.handleChange} className="form-control" id="plantsStock1" value={this.state.plantsStock} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >plantCost<br></br></label>
                        <input type="number" name="plantCost" onChange={this.handleChange} className="form-control" id="plantCost1" value={this.state.plantCost} required />
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