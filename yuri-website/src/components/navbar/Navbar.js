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
  let circle = React.createRef();
  let navbar = React.createRef();
  let navlist = React.createRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        nav.current.classList.add("scrolled");
        circle.current.classList.add("none");
      } else {
        nav.current.classList.remove("scrolled");
        circle.current.classList.remove("none");
      }
    });
  });

  const clickHandler = () => {
    if (state == false) {
      burger.current.classList.remove("burger-closed");
      burger.current.classList.add("burger-open");
      navbar.current.classList.remove("closed");
      navbar.current.classList.add("open");
      setState(true);
    } else {
      burger.current.classList.remove("burger-open");
      burger.current.classList.add("burger-closed");
      navbar.current.classList.remove("open");
      navbar.current.classList.add("closed");
      setState(false);
    }
  };

  const navClickHandler = (event) => {
    const links = navlist.current.childNodes;
    for (let val of links) {
      val.childNodes[0].classList.remove("nav-active");
    }
    event.target.classList.add("nav-active");
  };

  return (
    <header className="navbar" ref={nav}>
      <div className="mobile-view" ref={navbar}>
        <div className="mobile-content">
          <div>Home</div>
          <div>Education</div>
          <div>Working experience</div>
          <div>Skills</div>
          <div>Contact me</div>
        </div>
      </div>
      <div className="nav-content container">
        <div className="nav-logo">
          <div className="circles" ref={circle}>
            <img src={circles}></img>
          </div>
          <div className="name">Yuri Avagyan</div>
          <div className="web">Web Developer</div>
        </div>
        <div className="nav-list" ref={navlist}>
          <a href="#">
            <span className="nav-item" onClick={navClickHandler}>
              Home
            </span>
          </a>
          <a href="#education-sec">
            <span className="nav-item" onClick={navClickHandler}>
              Education
            </span>
          </a>
          <a href="#">
            <span className="nav-item" onClick={navClickHandler}>
              Working experience
            </span>
          </a>
          <a href="#">
            <span className="nav-item" onClick={navClickHandler}>
              Skills
            </span>
          </a>
          <a href="#">
            <span className="nav-item" onClick={navClickHandler}>
              Contacts
            </span>
          </a>
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
