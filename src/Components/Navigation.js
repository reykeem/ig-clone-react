import React from "react";
import "../Styles/navigation.css";
import logo from "../Images/Instagram_logo.svg.png";
import homeIcon from "../Images/home.png";
import pfp from "../Images/pfp.jpeg";

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="home-icon">
          <img className="home" src={homeIcon} alt="home" />
        </div>
        <div className="logo">
          <img src={logo} alt="ig-logo" />
        </div>
        <div className="right-nav">
          <div className="pfp">
            <img src={pfp} alt="pfp" />
          </div>
          <div className="username">
            <span>reykeem</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
