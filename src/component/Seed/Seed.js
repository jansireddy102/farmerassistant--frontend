import { Button } from "@mui/material";
import {useNavigate} from"react-router-dom";
import React from "react";
import './Seed.css'
const Seed =()=>{
    const navigate = useNavigate();
    return(
        <form>
        <h1>Seed</h1>

<ul><Button variant="outlined" color="success" onClick={()=>navigate('/Seed/SeedAdd')} >Seed Add</Button></ul>

<ul><Button variant="outlined" color="error" onClick={()=>navigate('/Seed/SeedUpdate')}>Seed Update</Button></ul>

<ul><Button variant="outlined" color="warning" onClick={()=>navigate('/Seed/SeedDelete')}>Seed Delete</Button></ul>

<ul><Button variant="outlined" color="secondary" onClick={()=>navigate('/Seed/SeedViewAll')} >Seed View </Button></ul>
        </form>
    )

}

export default Seed;