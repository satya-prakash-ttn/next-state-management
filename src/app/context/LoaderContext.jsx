"use client";
import { createContext, useState, useContext } from "react";


const LoaderContext = createContext();


export const LoaderProvider = ({ children }) => {
  const [loadingContext, setLoadingContext] = useState(false);

  return (
    <LoaderContext.Provider value={{ loadingContext, setLoadingContext }}>
      {children}
    </LoaderContext.Provider>
  );
};


export const useLoader = () => useContext(LoaderContext);
