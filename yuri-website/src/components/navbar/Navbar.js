import React from "react";
import "../../styles/global.scss";
import "../../styles/mixins.scss";
import "./styles.scss";
import circles from "../../images/circles.png";

function Navbar() {
  return (
    <header className="navbar ">
      <div className="nav-content container">
        <div className="circles">
          <img src={circles}></img>
        </div>
        <div className="nav-logo">
          <div className="name">Yuri Avagyan</div>
          <div className="web">Web Developer</div>
        </div>
        <div className="nav-list">
          <span className="nsv-item nav-active">Home</span>
          <span className="nsv-item">Education</span>
          <span className="nsv-item">Working experience</span>
          <span className="nsv-item">Skills</span>
          <span className="nsv-item">Contact me</span>
        </div>
        <div className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
