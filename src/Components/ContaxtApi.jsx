import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const apiData = createContext();

const ContaxtApi = ({ children }) => {
  let [apiInfo, setApiInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setApiInfo(res.data.products)); // Corrected apiInfo state update
  }, []);

  return (
    <apiData.Provider value={apiInfo}>
      {" "}
      {/* Providing correct apiInfo */}
      {children}
    </apiData.Provider>
  );
};

export { apiData, ContaxtApi }; // Corrected export
