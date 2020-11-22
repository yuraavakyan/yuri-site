import React, { useEffect } from "react";
import "../../styles/global.scss";
import "./styles.scss";
import photo from "../../images/photo1.png";

function MainSection() {
  let info = React.createRef();

  useEffect(() => {
    console.log(info.current.offsetWidth);
  });

  return (
    <section className="main">
      <div className="main-content">
        <div className="photo-section">
          <div className="photo-container">
            <div className="photo-skew">
              <div className="photo-skew-back">
                <img className="photo" src={photo}></img>
              </div>
            </div>
          </div>

          <div className="info-section-container">
            <div className="info-skew">
              <div className="info-skew-back">
                <div className="info-name">
                  <div className="greeting">
                    <div>Hello and Welcome</div>
                    <div>
                      I'm <span className="info-yuri">Yuri Avagyan</span>
                    </div>
                  </div>
                </div>
                <div className="info-text" ref={info}>
                  “ Hi, I am Yuri, and I create responsive web sites using
                  modern technologies such as React.js Node.js SCSS and other
                  commonly used ones. I’m also fine working with databases with
                  such tools as Mongo DB, MySQL and other database managing
                  frameworks. I have experience as a freelance developer and can
                  manage my time effeciently. I am a strong team player, who
                  believes that a team can do more rather than an individual. ”
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="download-btn-container">
            <div className="download-skew">
              <a href="Yuri_Avagyan.pdf" download>
                <div className="download-skew-back">Download CV</div>
              </a>
            </div>
          </div>
          <div className="more-btn-container">
            <div className="more-skew">
              <div className="more-skew-back">More...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
