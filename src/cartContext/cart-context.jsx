import { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';

const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [isCart, setIsCart] = useState([]);

  
  const notifyObj = {
    position: "top-center",
    autoClose: 2000, 
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }

  const notifySuccess = (content) => toast.success(content, notifyObj);
  const notifyError = (content) => toast.error(content, notifyObj);
  const notifyInfo = (content) => toast.info(content, notifyObj);
  const notifyWarn = (content) => toast.warn(content, notifyObj);

  const addCart = (id) => {
    setIsCart((oldData) => [{ id: id, qnt: 1 }, ...oldData]);
  };

  const deleteCart = (deleteId) => {
    setIsCart((cartData) => {
      return cartData.filter((val) => {
        return val.id != deleteId;
      });
    });
  };

  return (
    <cartContext.Provider value={{ notifySuccess, notifyError, notifyInfo, notifyWarn ,isCart, setIsCart, addCart, deleteCart }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => {
  return useContext(cartContext);
};
export { useCart, CartContextProvider };
