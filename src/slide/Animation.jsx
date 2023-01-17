import "./Animation.css";

import { Carousel } from "3d-react-carousal";

import { useProduct } from "../context/products-context";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";

import axios from "axios";

export default function Animation() {
  const [product, setProduct] = useState([]);
  const { query, setQuery } = useProduct();

  const navigate = useNavigate();

  useEffect(() => {
    async function holdData() {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
    }
    holdData();
  }, []);

  const { productx } = useProduct();

  let slides = [
    <img src="/images/two.jpg" alt="1" className="slide-images" />,
    <img src="/images/three.jpg" alt="2" className="slide-images" />,
    <img src="/images/five.jpg" alt="5" className="slide-images" />,
  ];

  return (
    <div>
      <Carousel slides={slides} autoplay={true} interval={2000} />
      <br /> <br /> <br /> <br />
      {/* First Api Data fetch */}
      <div className="wear-collection">
        <br />
        <br />
        <br />
        <br />
        <span className="shop-out-collection">Shop Our Top Category</span>
        <br />
        <br /> 
      
        <div className="all-product">
          {productx.map((val, index) => {
            return (
              <div key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="260"
                      // width='200'
                      image={val.thumbnail}
                      alt="green iguana"
                      className="first-map-image"
                    />

                    <h5 id='title'> {val.title}</h5>
                    <br />

                    <span className="price-rating">
                      <h4 id='rps'>${val.price}</h4>

                      <h4 id='star' style={{ marginTop: "0.7rem" }}>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <FaStarHalfAlt />
                      </h4>
                    </span>

               
                      <Button 
                      id='shop-btn'
                        variant="outlined"
                        onClick={() => navigate(`/product/${val.id}`)}
                      >
                        shop now{" "}
                      </Button>
                    
                 
                
                  </CardActionArea>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      {/* second(Dummy) Api Data fetch */}
      <div className="all-product">
        {product.map((val, index) => {
          return (
            <div>
              <br />
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image={val.image}
                    alt="green iguana"
                    className="first-map-image"
                  />
                  <CardContent>
                    <h5 id='title'>{val.category}</h5>
                    <br />

                    <span className="price-rating">
                      <h4 id='rps'>${val.price}</h4>

                      <h4 id='star' style={{ marginTop: "0.7rem" }}>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />

                        <FaStarHalfAlt />
                      </h4>
                    </span>
                
                      <Button
                      id='shop-btn'
                        variant="outlined"
                        onClick={() => navigate(`/Double/${val.id}`)}
                      >
                        shop now
                      </Button>
                 
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
