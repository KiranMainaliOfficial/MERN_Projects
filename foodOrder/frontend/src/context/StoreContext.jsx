import React, { createContext } from "react";
import { food_list } from "../assets/assets";

const StoreContext = createContext();
const StoreProvider = ({ children }) => {
  const contextValue = {
    food_list,
    // Add any state or functions you want to provide to the context here
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

// export default StoreContext;
export { StoreProvider, StoreContext };
