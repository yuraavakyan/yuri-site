import React, { useRef, useEffect } from "react";
import workicon from "../../images/icons/workicon.png";
import "./styles.scss";

function Education() {
  return (
    <section className="working">
      <div className="working-content container">
        <div className="working-title">
          <h2 className="work-title">Working experience</h2>
          <img className="edu-icon" src={workicon}></img>
        </div>
        <div className="workitems"></div>
      </div>
    </section>
  );
}

export default Education;
