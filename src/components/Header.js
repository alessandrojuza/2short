import React from "react";
import "../styles/Header.scss";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="section-container">
        <a>ABOUT</a>
        <a>CONTACT</a>
      </div>
    </div>
  );
};

export default Header;
