import React, { useState } from "react";
import { assets } from "../../assets/assets.js";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ showLoginPopup, setShowLoginPopup }) => {
  const [menu, setMenu] = useState("menu");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={menu === "menu" ? "active" : ""}
          onClick={() => setMenu("menu")}
        >
          Menu
        </a>
        <a
          href="#"
          className={menu === "about" ? "active" : ""}
          onClick={() => setMenu("about")}
        >
          About
        </a>
        <a
          href="#contact"
          className={menu === "contact" ? "active" : ""}
          onClick={() => setMenu("contact")}
        >
          Contact
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket" className="" />
          <div className="dot"></div>
        </div>
        <button
          onClick={() =>
            showLoginPopup ? setShowLoginPopup(false) : setShowLoginPopup(true)
          }
        >
          Dive In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
