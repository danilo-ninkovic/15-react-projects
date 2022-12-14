import React, { useState, useContext } from "react";

const AppContext = React.createContext(); //AppContext je naziv contexta
/* Context imamo za Providera i Consumera 
ovde koristimo samo Provider-a */

/* AppProvider ide u index.js  
da obuhvati App.js kao children*/
const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hellp">{children} </AppContext.Provider>;
};

/* useGlobalContext custom hook / da nebi morali 
u svakom fajlu importovati useContext kao i 
odredjeni kontext  - AppContext */
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
