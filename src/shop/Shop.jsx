import "./Shop.css";
import { useProduct } from "../context/products-context";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Shop() {
  const [navigateproduct, setNavigateproduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { query, setQuery } = useProduct("wear");
  useEffect(() => {
    async function findData() {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${query}`
      );
      setNavigateproduct(response.data.products);
    }
    findData();
    setTimeout(() => setLoading(false), 3000);
  }, [query]);
  return (
    <div className="choose-products">
      {loading === false ? (
        navigateproduct.map((prodct, ind) => {
          return (
            <div>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="280"
                    image={prodct.thumbnail}
                    alt="green iguana"
                    id="first-map-image"
                  />

                  <h5 id='title'> {prodct.title}</h5>
                  <br />

                  <h4 id='rps'>${prodct.price}</h4>

                  <h4 style={{ marginTop: "0.7rem", color: "black" }}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <FaStarHalfAlt />
                  </h4>
                  <Stack spacing={1} direction="row">
               
                    <Button
                    id='shop-btn'
                      variant="outlined"
                      onClick={() => navigate(`/product/${prodct.id}`)}
                    >
                      shop now
                    </Button>
                  </Stack>
                </CardActionArea>
              </Card>
              <br />
              <br />
              <br />
            </div>
          );
        })
      ) : (
        <div id="load-image">
          <img src="/images/loading.webp" alt="" id="load" />
        </div>
      )}
    </div>
  );
}
