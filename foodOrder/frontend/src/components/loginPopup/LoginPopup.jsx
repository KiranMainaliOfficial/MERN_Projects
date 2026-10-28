import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLoginPopup }) => {
  const [currentState, setCurrentState] = useState("signup");
  return (
    <div className="login-popup">
      <form action="">
        <h2 className="login-title">
          {currentState === "signup" ? "Sign Up" : "Login"}
        </h2>
        {/* <img
          src={assets.cross_icon}
          alt="crossIcon"
          onClick={() => setShowLoginPopup(false)}
        /> */}
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">
          {currentState === "signup" ? "Sign Up" : "Login"}
        </button>{" "}
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">
          &nbsp; I am agree with all of the terms and conditions.
        </label>
        <div>
          {currentState === "signup" ? (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrentState("login")}>Login</span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span onClick={() => setCurrentState("signup")}>Sign Up</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
