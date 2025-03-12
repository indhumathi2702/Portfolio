import React from "react";
import { Element } from "react-scroll";
import LinearProgress from "@mui/material/LinearProgress";

const Skills = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className="skillContainer_img">
        <img
          src="/assets/CodeImg.jpg"
          alt="skill Image"
          className="SkillImag"
        />
      </div>
      <div className="skillContainer_text">
        <h2>SKILL SET :</h2>
        <div className="skillcontainer_skillset">
          <h5>HTML</h5>
          {/* slider is default       :      Slider1 is Color */}
          <div className="skillcontainer_slider skillcontainer_slider1">
            <LinearProgress variant="determinate" value={100} />
          </div>
          <div className="skillcontainer_skillset">
            <h5>CSS</h5>
            {/* slider is default       :      Slider 2 is Color */}
            <div className="skillcontainer_slider skillcontainer_slider2">
              <LinearProgress variant="determinate" value={95} />
            </div>
            <div className="skillcontainer_skillset">
              <h5>JavaScript</h5>
              {/* slider is default       :      Slider1 is Color */}
              <div className="skillcontainer_slider skillcontainer_slider3">
                <LinearProgress variant="determinate" value={80} />
              </div>
            </div>
            <div className="skillcontainer_skillset">
              <h5>React</h5>
              {/* slider is default       :      Slider1 is Color */}
              <div className="skillcontainer_slider skillcontainer_slider4">
                <LinearProgress variant="determinate" value={60} />
              </div>
            </div>
            <div className="skillcontainer_skillset">
              <h5>JAVA</h5>
              {/* slider is default       :      Slider1 is Color */}
              <div className="skillcontainer_slider skillcontainer_slider5">
                <LinearProgress variant="determinate" value={65} />
              </div>
            </div>
            <div className="skillcontainer_skillset">
              <h5>SpringBoot</h5>
              {/* slider is default       :      Slider1 is Color */}
              <div className="skillcontainer_slider skillcontainer_slider6">
                <LinearProgress variant="determinate" value={50} />
              </div>
            </div>
            <div className="skillcontainer_skillset">
              <h5>My SQL</h5>
              {/* slider is default       :      Slider1 is Color */}
              <div className="skillcontainer_slider skillcontainer_slider8">
                <LinearProgress variant="determinate" value={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
