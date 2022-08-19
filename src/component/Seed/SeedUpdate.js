import React from "react";
import axios from "axios";
import {Button} from "@mui/material";
import './Seed.css'
export default class SeedUpdate extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            seedId:'',
            commonName:'',
            bloomTime:'',
            watering:'',
            difficultyLevel:'',
            temperature:'',
            typeOfSeed:'',
            seedDescription:'',
            seedsStock:'',
            seedCost:''
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
        const seed ={
            commonName:this.state.commonName,
            bloomTime:this.state.bloomTime,
            watering:this.state.watering,
            difficultyLevel:this.state.difficultyLevel,
            temperature:this.state.temperature,
            typeOfSeed:this.state.typeOfSeed,
            seedDescription:this.state.seedDescription,
            seedsStock:this.state.seedsStock,
            seedCost:this.state.seedCost
        };
        console.log(seed);
        axios.put('http://localhost:8081/seed/update',seed)
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
                        <label >watering<br></br></label>
                        <input type="text" name="watering" onChange={this.handleChange} className="form-control" id="watering1" value={this.state.watering} required />
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
                        <label >typeOfSeed<br></br></label>
                        <input type="text" name="typeOfSeed" onChange={this.handleChange} className="form-control" id="typeOfSeed1" value={this.state.typeOfSeed} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >seedDescription<br></br></label>
                        <input type="text" name="seedDescription" onChange={this.handleChange} className="form-control" id="seedDescription1" value={this.state.seedDescription} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >seedsStock<br></br></label>
                        <input type="number" name="seedsStock" onChange={this.handleChange} className="form-control" id="seedsStock1" value={this.state.seedsStock} required />
                    </div>
                </div>
                <div>
                    <div>
                        <label >seedCost<br></br></label>
                        <input type="number" name="seedCost" onChange={this.handleChange} className="form-control" id="seedCost1" value={this.state.seedCost} required />
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