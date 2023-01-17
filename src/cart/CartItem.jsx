import React, {useEffect, useState} from "react";
import { AiFillDelete } from "react-icons/ai";
import { useCart } from "../cartContext/cart-context";
import axios from "axios";

const CartItem = ({id, qnt}) => {

  const [cartItemData, setCartItemData] = useState({});

  const {isCart, deleteCart}= useCart()

  const getCartData=async (id)=>{
    let res= await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(res.data);
    setCartItemData(res.data)
  }

  useEffect(() => {
    getCartData(id);
  }, [isCart])

  return (
    cartItemData &&
    <div className="first">
      <div className="first-cart-container">
        {" "}
        <div className="image-text">
          <img style={{width: "100px", height: "110px"}} src={cartItemData.thumbnail} alt="" className="first-image" />
          <span>
            Title <br />
            <br />
            <span>{cartItemData.title}</span>
          </span>{" "}
          <span>
            {" "}
            Quantity <br />
            <br />
            <span>{qnt}pc</span>
          </span>{" "}
          <span>
            {" "}
            Price <br />
            <br /> <span className="rupees">${cartItemData.price}</span>
          </span>{" "}
          <span onClick={()=>deleteCart(cartItemData.id)}>
            delete <br />
            <br />
            <AiFillDelete className="delete-icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
