import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();
const initialState = {
  //pocetni state pre reducera
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  /* state je prvo initialState i salje se u reducer.js na manipulaciju 
     dispatch sluzi za slanje  funkcija koje manipulisu state-om
     one su definisane ovde sa odredjenim 'type-om' 
     POZIVAJU SE U COMPONENTAMA  i salju se u reducer.js
     gdje se po tom type-om manipulise state-om
  */
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    //brise cart array
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    //bise single cart preko id-a  preko drugog parametra nazvanog payload
    dispatch({ type: "REMOVE", payload: id });
  };
  /* povecava broj komada odredjenog produkta */
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  /* smanjuje broj komada odredjenog produkta */
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  /* za povecavanje i smanjenje komada odredjenog produkta */
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  /* dohvatanje data preko url-a */
  useEffect(() => {
    fetchData();
  }, []);

  /* kod svakog rendera se salje type: "GET_TOTALS" 
  nije potrebno definisati funkciju koja ce biti pozivana */
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        //state iz reducer.js-a
        ...state,
        /* dispatch funkcije */
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
