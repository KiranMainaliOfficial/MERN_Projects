import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="upper-footer">
        <div className="footer-info">
          <div>
            <img src={assets.logo} alt="logo" />
            <p>Your Favorite Food Delivery Service.</p>
            <p>The top choice for delicious meals delivered to your door.</p>
            <p>No.1 Food Delivery Service in Entire Nepal.</p>
          </div>

          <div className="social-footer">
            {" "}
            <a
              href="https://www.facebook.com/key.run.mainali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div>
          <h3>Go to.</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="get-in-touch">
          <h3>Get in Touch</h3>
          <p>123 Food Street, Taste City</p>
          <p>Email: info@foodorder.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <hr />
      <div className="copy">
        {" "}
        <p>&copy; 2026 FoodOrder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
