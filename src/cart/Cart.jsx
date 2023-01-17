import "./Cart.css";
import CartItem from "./CartItem";
import { useCart } from "../cartContext/cart-context";

import Emptycart from '../emptyCart/Emptycart';
import {useGlobalLogin} from '../loginContext/login-context'
import Logincart from '../signCart/Logincart'
import { cardMediaClasses } from "@mui/material";
export default function Cart() {
  const { isCart, setIsCart } = useCart();


 const {userToken}= useGlobalLogin();
  return (
<div>
   { userToken?
    cardMediaClasses.length!==0?
   
    <div>
      <div id="shopping-cart">
        <h3>Shopping cart🛍️</h3>

      </div>
      <br/>
      <br/>
   

      {isCart &&
        isCart.map(({ id, qnt }) => {
          return <CartItem id={id} qnt={qnt} />;
        })}
    </div>:<Emptycart />:<Logincart />}</div>
  );
}
