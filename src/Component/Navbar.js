import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navBar_left">
        <h1>
          Develop
          {/* separate clr */}
          <span>er</span>
        </h1>
      </div>
      <div className="navBar_right">
        <Link to="about" smooth={true} duration={500}>
          <h4> About Me</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to="project" smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>
        <Link to="exp" smooth={true} duration={500}>
          <h4>Experience</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
        {/* <Link>
        <h4>Join With Mee</h4>
        </Link> */}
        
      </div>
    </div>
  );
};

export default Navbar;
