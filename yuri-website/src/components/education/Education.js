import React from "react";
import "./styles.scss";
import eduicon from "../../images/icons/edu-icon.png";
import pluralsight from "../../images/icons/pluralsight.png";
import coursera from "../../images/icons/coursera.png";
import free from "../../images/icons/free.png";

function Education() {
  return (
    <div className="education">
      <div className="education-content container">
        <div className="education-title">
          <h2 className="title">Education</h2>
          <img className="edu-icon" src={eduicon}></img>
        </div>
        <div className="edu-items">
          <div className="rau">
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
          <div className="confucius">
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
        <div className="courses">
          <div className="courses-skew">
            <div className="courses-skew-back">
              <div className="courses-text">
                <div>2019 - Present</div>
                <div>
                  Dozens of online-courses regarding Javascript including
                  React.js, Node.js, Databases and other related topics at such
                  platforms as:
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="platforms">
          <div className="platforms-skew">
            <div className="platforms-skew-back">
              <div className="companies">
                <img src={pluralsight}></img>
                <div company-title>Pluralsight</div>
              </div>
              <div className="companies">
                <img src={coursera}></img>
                <div company-title>Coursera</div>
              </div>
              <div className="companies">
                <img src={free}></img>
                <div company-title>Freecodecamp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
