import { Button } from "@mui/material";
import {useNavigate} from"react-router-dom";
import React from "react";
import './plant.css'
const Plant =()=>{
    const navigate = useNavigate();
    return(
        <form>
        <div>
            <h1>Plant</h1>
            <ul><button class="custom-btn btn-1" onClick={()=>navigate('/Plant/add')}>Add Plant</button></ul>
            <br></br>
            <br></br>
            <ul><button class="custom-btn btn-1" onClick={()=>navigate('/Plant/Update')}>Update Plant</button></ul>
            <br></br>
            <br></br>
            <ul><button class="custom-btn btn-1" onClick={()=>navigate('/Plant/Delete')}>Delete Plant</button></ul>
            <br></br>
            <br></br>
            <ul><button class="custom-btn btn-1" onClick={()=>navigate('/Plant/PlantViewAll')}>view Plant</button></ul>
            <br></br>
            <br></br>
        </div>
        </form>
    )

}

export default Plant;