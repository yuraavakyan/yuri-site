import React, { useRef, useEffect } from "react";
import workicon from "../../images/icons/workicon.png";
import "./styles.scss";
import mysql from "../../images/icons/mysql.png";
import node from "../../images/icons/node.png";
import react from "../../images/icons/react.png";
import mongo from "../../images/icons/mongodb.png";

function Education() {
  let work = useRef();
  let krka = useRef();
  let fei = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1500) {
        work.current.style = "animation: showup 1s forwards";
        krka.current.classList.add("animated-left");
        fei.current.classList.add("animated-right");
      }
    });
  });
  return (
    <section className="working">
      <div className="working-content container">
        <div className="working-title" ref={work}>
          <h2 className="work-title">Working experience</h2>
          <img className="edu-icon" src={workicon}></img>
        </div>
        <div className="edu-items">
          <div className="rau" ref={krka}>
            <div className="rau-skew">
              <div className="rau-skew-back">
                <div className="rau-text">
                  <div>2017 - 2019</div>
                  <div>KRKA Pharmaceuticals</div>
                  <div>IT Associate, Business data analytics</div>
                </div>
              </div>
            </div>
          </div>
          <div className="confucius" ref={fei}>
            <div className="confucius-skew">
              <div className="confucius-skew-back">
                <div className="confucius-text">
                  <div>2019 - 2020</div>
                  <div>FeiHua Trading Company</div>
                  <div>Overseas market specialist, Product manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="working-text">
          <div className="blue-background"></div>
          <div className="freelancing">
            <h2>2020 - present</h2>
            <h2>Working as a freelancer</h2>
            <h2 className="creating">
              Creating web applications, using latest technologies, DBMS and
              libraries, such as:
            </h2>
            <div className="technologies">
              <div className="react">
                <img src={react}></img>
                <h2>React.js</h2>
              </div>
              <div className="node">
                <img src={node}></img>
                <h2>Node.js</h2>
              </div>
              <div className="mongo">
                <img src={mongo}></img>
                <h2>Mongo DB</h2>
              </div>
              <div className="mysql">
                <img src={mysql}></img>
                <h2>MySQL</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
