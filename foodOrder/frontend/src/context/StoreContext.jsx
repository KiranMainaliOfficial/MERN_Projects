import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

const StoreContext = createContext();
const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState({});
  // const [menuCategory, setMenuCategory] = useState("All");
  // setMenuCategory({ category });

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,

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
