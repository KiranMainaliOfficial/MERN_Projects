import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import PlaceOrder from "./pages/placeOrder/PlaceOrder.jsx";
import Footer from "./components/footer/Footer.jsx";
import { StoreContext } from "./context/StoreContext.jsx";

function App() {
  console.log(StoreContext);
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          {/* Routes will be added here in the future for different pages like Home, Cart, and PlaceOrder. */}

          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
