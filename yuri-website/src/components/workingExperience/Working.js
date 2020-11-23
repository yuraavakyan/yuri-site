import React, { useRef, useEffect } from "react";
import workicon from "../../images/icons/workicon.png";
import "./styles.scss";

function Education() {
  let work = React.useRef();
  let krka = React.useRef();
  let fei = React.useRef();

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
      </div>
    </section>
  );
}

export default Education;
