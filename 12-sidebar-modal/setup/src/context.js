import React, { useState, useContext } from "react";

const AppContext = React.createContext(); //AppContext je naziv contexta
/* Context imamo za Providera i Consumera 
ovde koristimo samo Provider-a */

/* AppProvider ide u index.js  
da obuhvati App.js kao children*/
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        /* states */
        isModalOpen,
        isSidebarOpen,
        /* functions */
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}{" "}
    </AppContext.Provider>
  );
};

/* useGlobalContext custom hook / da nebi morali 
u svakom fajlu importovati useContext kao i 
odredjeni kontext  - AppContext */
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
