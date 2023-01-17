import Navbar from "./navbar/Navbar";
import Animation from "./slide/Animation";
import Singleproducts from "./singleproducts/Singleproducts";
import Emptycart from "./emptyCart/Emptycart";
import Logincart from "./signCart/Logincart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Doubleproducts from "./doubleproducts/Doubleproducts";
import Cart from "./cart/Cart";
import Footer from "./footer/Footer";
import Shop from "./shop/Shop.jsx";
import Login from "./login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer />

      <Navbar />

      <Routes>
        <Route path="/" element={<Animation />}></Route>

        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<Singleproducts />}></Route>
        <Route path="/Double/:id" element={<Doubleproducts />}></Route>
        <Route path="/Empty" element={<Emptycart />}></Route>
        <Route path="/Login" element={<Logincart />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
