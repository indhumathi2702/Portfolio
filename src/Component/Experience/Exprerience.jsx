import React from "react";
import { Element } from "react-scroll";
import ExperienceBox from "./ExperienceBox";
const Exprerience = () => {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience</h1>
      <div className="Experience">
        <div className="experienceBox">
          <p>
            <strong>Company:</strong> Airoi Inc Private Limited
          </p>
          <p>
            <strong>Role:</strong> Assosiate Software Engineer
          </p>
          <p>
            <strong>Experience:</strong> 02/01/2025 - Present
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Exprerience;
