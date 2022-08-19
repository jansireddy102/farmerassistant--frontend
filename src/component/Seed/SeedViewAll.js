import React from "react";
import axios from "axios";
import "./View.css"

export default class SeedViewAll extends React.Component{
    state ={
        seed:[]
    }
    componentDidMount(){
        axios.get('http://localhost:8081/seed/viewall')
        .then(res=>{
            const seed = res.data;
            console.log(seed);
            this.setState({seed});
        }).catch((er)=>alert("Problem in fetching"))
    }
    render(){
        return(
            <form>
            <div>
                <h1> Seed Details </h1>
                <div className="seed_details">
                    <ul className="view_ui">
                        {
                            <table className="table table-striped" >
                            <thead className="thead-dark">
                              <tr>
                                <th scope="col">Seed Id</th>
                                <th scope="col">Common Name</th>
                                <th scope="col"> Bloom Time </th>
                                <th scope="col"> Watering</th>
                                <th scope="col"> Difficulty Level </th>
                                <th scope="col"> Temperature </th>
                                <th scope="col"> Type</th>
                                <th scope="col"> Description</th>
                                <th scope="col"> Stock</th>
                                <th scope="col"> Cost </th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.seed.map((c) => (
                                <tr key={c.seedId}>
                                  <td>{c.seedId}</td>
                                  <td>{c.commonName}</td>
                                  <td>{c.bloomTime}</td>
                                  <td>{c.watering}</td>
                                  <td>{c.difficultyLevel}</td>
                                  <td>{c.temperature}</td>
                                  <td>{c.typeOfSeed}</td>
                                  <td>{c.seedDescription}</td>
                                  <td>{c.seedsStock}</td>
                                  <td>{c.seedCost}</td>
              
                                </tr>
                              ))}
                            </tbody>
                          </table>

                            // this.state.seed.map((seed,Index)=>
                            // <li key={Index}>
                            //     <ul>
                            //     <li>
                            //     seed_id:{seed.seedId}
                            //     </li>
                            //     <li>Name:{seed.commonName}</li>  
                            //     <li>
                            //     bloomTime:{seed.bloomTime}
                            //     </li>
                            //     <li>
                            //     watering:{seed.watering}
                            //     </li>
                            //     <li>
                            //     difficultyLevel:{seed.difficultyLevel}
                            //     </li>
                            //     <li>
                            //         temperature:{seed.temperature}
                            //     </li>
                            //     <li>
                            //         typeOfSeed:{seed.typeOfSeed}
                            //     </li>
                            //     <li>
                            //     seedDescription:{seed.seedDescription}
                            //     </li>
                            //     <li>
                            //     seedsStock:{seed.seedsStock} 
                            //     </li>
                            //     <li>
                            //     seedCost:{seed.seedCost}
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