import React from "react";
import axios from "axios";
import "./view.css"

export default class PlantViewAll extends React.Component{
    state ={
        plant:[]
    }
    componentDidMount(){
        axios.get('http://localhost:8080/plant/viewall')
        .then(res=>{
            const plant = res.data;
            console.log(plant);
            this.setState({plant});
        }).catch((er)=>alert("Problem in fetching"))
    }
    render(){
        return(
            <form>
            <div>
                <h1> Plant Details </h1>
                <div className="plant_details">
                    <ul className="view_ui">
                        {
                            <table className="table table-striped" >
                            <thead className="thead-dark">
                              <tr>
                                <th scope="col">Plant Id</th>
                                <th scope="col">Plant Height</th>
                                <th scope="col"> Plant Spread </th>
                                <th scope="col">Common Name</th>
                                <th scope="col"> Bloom Time </th>
                                <th scope="col"> Medicinal Or Culinary </th>
                                <th scope="col"> Difficulty Level </th>
                                <th scope="col"> Temperature </th>
                                <th scope="col"> Type</th>
                                <th scope="col"> Description</th>
                                <th scope="col"> Stock</th>
                                <th scope="col"> Cost </th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.plant.map((c) => (
                                <tr key={c.plantId}>
                                  <td>{c.plantId}</td>
                                  <td>{c.plantHeight} </td>
                                  <td>{c.plantSpread}</td>
                                  <td>{c.commonName}</td>
                                  <td>{c.bloomTime}</td>
                                  <td>{c.medicinalOrCulinaryUse}</td>
                                  <td>{c.difficultyLevel}</td>
                                  <td>{c.temperature}</td>
                                  <td>{c.typeOfPlant}</td>
                                  <td>{c.plantDescription}</td>
                                  <td>{c.plantsStock}</td>
                                  <td>{c.plantCost}</td>
              
                                </tr>
                              ))}
                            </tbody>
                          </table>
                            // this.state.plant.map((plant,Index)=>
                            // <li key={Index}>
                            //     <ul>
                            //     <li>
                            //     plant_id:{plant.plantId}
                            //     </li>
                            //     <li>Name:{plant.commonName}</li>  
                            //     <li>
                            //     plantHeight:{plant.plantHeight}
                            //     </li>
                            //     <li>
                            //     plantSpread:{plant.plantSpread}   
                            //     </li>
                            //     <li>
                            //     bloomTime:{plant.bloomTime}
                            //     </li>
                            //     <li>
                            //     medicinalOrCulinaryUse:{plant.medicinalOrCulinaryUse}
                            //     </li>
                            //     <li>
                            //     difficultyLevel:{plant.difficultyLevel}
                            //     </li>
                            //     <li>
                            //         temperature:{plant.temperature}
                            //     </li>
                            //     <li>
                            //         typeOfPlant:{plant.typeOfPlant}
                            //     </li>
                            //     <li>
                            //     plantDescription:{plant.plantDescription}
                            //     </li>
                            //     <li>
                            //     plantsStock:{plant.plantsStock} 
                            //     </li>
                            //     <li>
                            //     plantCost:{plant.plantCost}
                            //     </li>

                            //     </ul>
                            //     <br></br>
                            // </li>
                            // )
                        }
                    </ul>
                </div>
            </div>
            </form>
        )
    }
}