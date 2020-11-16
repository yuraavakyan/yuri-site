import React, { createRef, useEffect } from "react";
import "../../styles/global.scss";
import "../../styles/mixins.scss";
import "./styles.scss";
import circles from "../../images/circles.png";
import { useState } from "react";

function Navbar() {
  const [state, setState] = useState(false);
  let burger = React.createRef();
  let nav = React.createRef();
  let circles = React.createRef();
  let navbar = React.createRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        circles.current.classList.add("none");
        nav.current.classList.add("scrolled");
      } else {
        circles.current.classList.remove("none");
        nav.current.classList.remove("scrolled");
      }
    });
  });

  const clickHandler = () => {
    console.log(burger);
    if (state == false) {
      burger.current.classList.remove("burger-closed");
      burger.current.classList.add("burger-open");
      nav.current.classList.remove("closed");
      nav.current.classList.add("open");
      setState(true);
    } else {
      burger.current.classList.remove("burger-open");
      burger.current.classList.add("burger-closed");
      nav.current.classList.remove("open");
      nav.current.classList.add("closed");
      setState(false);
    }
  };
  return (
    <header className="navbar ">
      <div className="mobile-view" ref={nav}>
        <div className="mobile-content ">
          <div>Home</div>
          <div>Education</div>
          <div>Working experience</div>
          <div>Skills</div>
          <div>Contact me</div>
        </div>
      </div>
      <div className="nav-content container" ref={nav}>
        <div className="nav-logo">
          <div className="circles" ref={circles}>
            <img src={circles}></img>
          </div>
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
        <div className="burger" ref={burger} onClick={clickHandler}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
