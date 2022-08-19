import React from "react";
import axios from "axios";
import "./view.css"

export default class PlanterViewAll extends React.Component{
    state ={
        planter:[]
    }
    componentDidMount(){
        axios.get('http://localhost:8080/planter/viewall')
        .then(res=>{
            const planter = res.data;
            console.log(planter);
            this.setState({planter});
        }).catch((er)=>alert("Problem in fetching"))
    }
    render(){
        return(
            <form>
            <div>
          <div>
             <h1> Planter Details </h1>
            <table className="table table-striped" >
              <thead className="thead-dark">
                <tr>
                  <th scope="col">planterId</th>
                  <th scope="col">drainageHoles</th>
                  <th scope="col">planterCapacity</th>
                  <th scope="col"> planterColor </th>
                  <th scope="col"> planterCost </th>
                  <th scope="col"> planterHeight </th>
                  <th scope="col"> planterShaper </th>
                  <th scope="col"> planterStock </th>
                </tr>
              </thead>
              <tbody>
                {this.state.planter.map((c) => (
                  <tr key={c.planterId}>
                    <td>{c.planterId}</td>
                    <td>{c.drainageHoles} </td>
                    <td>{c.planterCapacity}</td>
                    <td>{c.planterColor}</td>
                    <td>{c.planterCost}</td>
                    <td>{c.planterHeight}</td>
                    <td>{c.planterShaper}</td>
                    <td>{c.planterStock}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </form>
        )
    }
}