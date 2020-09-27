import React from "react";
import "./Header.css";
import logo from "../images/logo.svg";

function Header() {
  return (
    <div className="container">
      <div className="left-side">
        <img src={logo} />
        <a href="#" id="features">
          Features
        </a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </div>
      <div className="right-side">
        <a href="#">Login</a>
        <button className="button">
          <a href="#" className="sign-up">
            Sign Up
          </a>
        </button>
      </div>
    </div>
  );
}

export default Header;
