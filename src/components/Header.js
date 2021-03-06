import React from "react";
import "../styles/Header.scss";
import logo from "../img/logo.png";

const Header = ({ showModalAbout }) => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="section-container">
        <a onClick={showModalAbout}>ABOUT</a>
        <a href="mailto:mascia.alessandrio89@gmail.com">CONTACT</a>
      </div>
    </div>
  );
};

export default Header;
