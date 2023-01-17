import "./Doubleproducts.css";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useParams } from "react-router-dom";

import {BsFillTagFill} from 'react-icons/bs';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";

export default function Doubleproducts() {
  const [double, setDouble] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getDouble() {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      setDouble(response.data);
    }
    getDouble();
  }, []);

  return (
    double && (
      <div>
      <div id='single-product'>
    
     {
      <img src={double.image} alt="" id='double-image'/>
     }
       {  <h3> {double.title}</h3>}

     

       <h4 style={{ marginTop: "0.7rem" ,color:'orange'}}>
       <AiFillStar />
       <AiFillStar />
       <AiFillStar />
       <AiFillStar />
       <FaStarHalfAlt />
     </h4>
     <h4>Left: 7</h4>
    
     <div > {<h5> <span style={{fontSize:'1.1rem',fontWeight:'600'}}>Brand: </span>ipsum</h5>}<span style={{fontSize:'1.1rem',fontWeight:'800'}}> Description:</span>{double.description}</div>
   

      </div>
   <h2 id='deal'>  <BsFillTagFill/> Deal of the Day</h2> 
  <span id='price'> Price: <span style={{fontSize:'1.5rem',fontWeight:'600'}}>${double.price}</span></span>  
  
  <br/> <span id='off' >  offer: <span style={{fontSize:'1.5rem',fontWeight:'600'}}>12.5%</span> </span>
 
  <Stack spacing={2} direction="row" id='cart-button'>
  
  <Button variant="contained">add to cart</Button>
  <Button variant="contained">buy now</Button>
</Stack>
      </div>
    )
  );
}
