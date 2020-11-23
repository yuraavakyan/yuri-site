import React, { useRef, useEffect } from "react";
import { useState } from "react";
import "./styles.scss";
import eduicon from "../../images/icons/edu-icon.png";
import pluralsight from "../../images/icons/pluralsight.png";
import coursera from "../../images/icons/coursera.png";
import free from "../../images/icons/free.png";

function Education() {
  let rau = React.useRef();
  let confucius = React.useRef();
  let title = React.useRef();
  let courses = React.useRef();
  const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        if (state == false) {
          rau.current.classList.add("animated-left");
          confucius.current.classList.add("animated-right");
          title.current.classList.add("showUp");
          courses.current.style = "animation: courses 1s forwards 2s;";
          setState(true);
        }
      }
    });
  });

  return (
    <section className="education">
      <a id="education-sec"></a>
      <div className="education-content container">
        <div className="education-title" ref={title}>
          <h2 className="title">Education</h2>
          <img className="edu-icon" src={eduicon}></img>
        </div>
        <div className="edu-items">
          <div className="rau" ref={rau}>
            <div className="rau-skew">
              <div className="rau-skew-back">
                <div className="rau-text">
                  <div>2010 - 2014</div>
                  <div>Russian - Armenian University</div>
                  <div>
                    Bachelor's degree in applied mathematics and informatics
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="confucius" ref={confucius}>
            <div className="confucius-skew">
              <div className="confucius-skew-back">
                <div className="confucius-text">
                  <div>2017 - 2018</div>
                  <div>Confucius Institute at YSLU</div>
                  <div>Chinese language and culture</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="courses" ref={courses}>
          <div className="courses-text">
            <div>2019 - Present</div>
            <div>
              Dozens of online-courses regarding Javascript including React.js,
              Node.js, Databases and other related topics at such platforms as:
            </div>
            <div className="platforms">
              <div className="logo">
                <div className="logo-container">
                  <span>
                    <img src={pluralsight}></img>
                  </span>
                  <span>Pluralsight</span>
                </div>
              </div>
              <div className="logo">
                <div className="logo-container">
                  <span>
                    <img src={coursera}></img>
                  </span>
                  <span>Coursera</span>
                </div>
              </div>
              <div className="logo">
                <div className="logo-container">
                  <span>
                    <img src={free}></img>
                  </span>
                  <span>FreeCodeCamp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
