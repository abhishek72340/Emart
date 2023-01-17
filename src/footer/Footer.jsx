import './Footer.css';
import Button from '@mui/material/Button';
import {RiInstagramFill} from 'react-icons/ri';
import {FaTwitterSquare} from 'react-icons/fa';
import {ImGithub} from 'react-icons/im';
import {IoLogoLinkedin} from 'react-icons/io';

import React,{useState} from 'react';
import { useCart } from '../cartContext/cart-context';



export default function Footer(){

    const {notifySuccess}=useCart();
    


    const[emailid,setEmailid]=useState('')

    const subscribe =(e)=>{
setEmailid(e.target.value);

    };



    return(
       
        <div style={{backgroundColor:'lightgray'}}> 
        <br/><br/><br/>
        <div id='footer-inform-text'><span> <span id='emarts' >Emart's Shop</span><br/><br/>About Us<br/><br/>Browse Products<br/><br/>Contact Us<br/><br/>FAQs</span> <span> <span id='collection'>Collections</span><br/> <br/>Winter 2023<br/><br/>Womens'Collection<br/><br/>Mens'Collection<br/><br/>Shoes <br/><br/>Bags</span>
    <br/><span><span id='customer' >Customer Care</span><br/> <br/>Order Tracking<br/><br/>Privacy Policy<br/><br/>Payments & Returns<br/><br/>FAQs</span>
        </div>
        <br/>
       
        <span id='email-submit'>
        <img src="/images/store.svg" alt="" className="google-store" />

        <form action="" >
        <input type="email" placeholder='e-mail' id='email-input' value={emailid} onChange={subscribe} required/>
         
        <Button variant="contained" id='sub-btn' onClick={()=>notifySuccess("Subscribed")}>Subscribe</Button>      
    
        </form>
        </span>
       

      

        <span id='media-icons'>
        <a href="https://www.linkedin.com/in/abhishek-singh-rana-6354a9180/"><IoLogoLinkedin className='media'/></a>
       <a href="https://www.instagram.com/__abhisheksinghrana/" ><RiInstagramFill className='media'/></a>
      <a href="https://twitter.com/Abhishe66896161" > <FaTwitterSquare className='media'/></a> 
       <a href="https://github.com/abhishek72340" > <ImGithub className='media'/></a>
        </span>
        <br/>

        <div id='copy-text'>
      <span>&copy; 2023-Emart's Shop: All Copy Reserved </span>
        </div>
        </div>
    )
}