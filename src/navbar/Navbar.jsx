import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useGlobalLogin } from "../loginContext/login-context";
import { NavLink, useNavigate } from "react-router-dom";

import { useProduct } from "../context/products-context";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ImCart } from "react-icons/im";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { CiSearch } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { useCart } from "../cartContext/cart-context";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [noOfItemsInCArt, setNoOfItemsInCart] = useState(0);
  const { query, setQuery } = useProduct();
  const { isCart } = useCart();

  const { userToken, logoutUser, uerDetail } = useGlobalLogin();
  const logoutAction = () => {
    logoutUser();
  };

  const navigate = useNavigate();

  useEffect(() => {
    setNoOfItemsInCart(isCart.length);
  }, [isCart]);

  const searchdata = (e) => {
    setSearch(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setQuery(search);
    navigate("/Shop");
  };

  return (
    <div>
      {/*Navbar container */}
      <div id="nav-container">
        <nav id="navbar">
          {/*Emart logo */}
          <img src="/images/logo.png" alt="" id="logo-image" />

          <img src="/images/elogo.png" alt="" id="elogo-image" />

          {/*Search Bar */}
          <form onSubmit={submit} id="search-bar-icon">
            {/*for mobile*/}
            <input
              type="text"
              onChange={searchdata}
              placeholder="Search For Products"
              id="media-search"
            />
            <button type="submit" id="media-search-icon-button">
              <CiSearch id="media-search-icon" />
            </button>
            {/*for desktop*/}
            <input
              type="text"
              placeholder="Search For Products"
              id="search-input"
              onChange={searchdata}
            />{" "}
            <button type="submit" id="search-icon-button">
              <CiSearch id="search-icon" />
            </button>
          </form>

          {/*Login Button */}
          <span id="icons">
            <AiFillHome id="home-icon" onClick={() => navigate("/")} />
            {userToken ? (
              <Button variant="contained" id="login" onClick={logoutAction} >
                Logout
              </Button>
            ) : (
              <NavLink to="/login">
                <Button variant="contained" id="login" style={{marginTop:'-1rem'}}>
                  Login
                </Button>
              </NavLink>
            )}
            {/*Cart Button */}
            {/*<ImCart id="cart-icon" onClick={() => navigate("/Cart")} />*/}
            <Badge
              badgeContent={noOfItemsInCArt}
              color="secondary"
              onClick={() => navigate("/Cart")}
            >
              <ShoppingCartIcon color="action" id="badge-cart" />
            </Badge>
          </span>
        </nav>
      </div>

      <br />
      <br />
    </div>
  );
}
