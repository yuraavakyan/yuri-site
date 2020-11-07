import React from "react";
import "../../styles/global.scss";
import "./styles.scss";
import photo from "../../images/photo.png";

function MainSection() {
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
              <div className="info-skew-back"></div>
            </div>
          </div>
        </div>
        <div className="buttons"></div>
      </div>
    </section>
  );
}

export default MainSection;
