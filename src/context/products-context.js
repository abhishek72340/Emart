import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [productx, setProductx] = useState([]);

  const [query, setQuery] = useState("wear");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${query}`
      );

      setProductx(response.data.products);
    }
    getData();
  }, []);

  return (
    <productContext.Provider value={{ productx, setProductx, query, setQuery }}>
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => {
  return useContext(productContext);
};
export { useProduct, ProductContextProvider };
