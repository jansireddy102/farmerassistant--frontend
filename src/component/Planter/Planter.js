import { Button } from "@mui/material";
import {useNavigate} from"react-router-dom";
import React from "react";
import './planter.css'
const Planter =()=>{
    const navigate = useNavigate();
    return(
        <form>
        <div>
            <h1>Planter</h1>
            <ul><button class="custom-btn btn-1" onClick={()=>navigate('/Planter/add')}>Add Planter</button></ul>
            <br></br>
            <br></br>
            <ul><button class="custom-btn btn-1" onClick={()=>navigate('/Planter/Update')}>Update Planter</button></ul>
            <br></br>
            <br></br>
            <ul><button class="custom-btn btn-1" onClick={()=>navigate('/Planter/Delete')}>Delete Planter</button></ul>
            <br></br>
            <br></br>
            <ul><button class="custom-btn btn-1" onClick={()=>navigate('/Planter/PlanterViewAll')}>view Planter</button></ul>
            <br></br>
            <br></br>
        </div>
        </form>
    )

}

export default Planter;