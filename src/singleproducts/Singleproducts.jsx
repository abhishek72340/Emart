import { useParams } from "react-router-dom";
import axios from "axios";
// import { AiFillStar } from "react-icons/ai";
// import { FaStarHalfAlt } from "react-icons/fa";

import "./Singleproducts.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


import {BsFillTagFill} from 'react-icons/bs';

import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";

import {useCart}from '../cartContext/cart-context';

export default function Singleproducts() {
  const [loading, setLoading] = useState(true);
  const [single, setSingle] = useState();
  const { id } = useParams();

  const {addCart}=useCart();



  useEffect(() => {
    async function getproduct() {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);

      setSingle(response.data);
    }
    getproduct();
    setTimeout(() => setLoading(false), 3000);
  }, []);


  return (
  single && (
      <div>
      <div id='single-product'>
  
    
     {
      <img src={single.thumbnail} alt="" id='single-image'/>
     }
       {  <h3> {single.title}</h3>}

     

       <h4 style={{ marginTop: "0.7rem" ,color:'orange'}}>
       <AiFillStar />
       <AiFillStar />
       <AiFillStar />
       <AiFillStar />
       <FaStarHalfAlt />
     </h4>
     <h4>Left: {single.stock}</h4>
    
     <div > {<h5> <span style={{fontSize:'1.1rem',fontWeight:'600'}}>Brand: </span>{single.brand}</h5>}<span style={{fontSize:'1.1rem',fontWeight:'800'}}> Description:</span>{single.description}</div>
   

      </div>
   <h2 id='deal'>  <BsFillTagFill/> Deal of the Day</h2> 
  <span id='price'> Price: <span style={{fontSize:'1.5rem',fontWeight:'600'}}>${single.price}</span></span>  
  
  <br/> <span id='off' >  offer: <span style={{fontSize:'1.5rem',fontWeight:'600'}}>{single.discountPercentage}%</span> </span>
 
  <Stack spacing={2} direction="row" id='cart-button'>
  
  <Button variant="contained" onClick={()=>addCart(single.id)}>add to cart</Button>
  <Button variant="contained">buy now</Button>
</Stack> 
      </div>
      
    )
  );
}
