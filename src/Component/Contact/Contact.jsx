import { IconButton } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { LiaGithub } from "react-icons/lia";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact </h1>
      <div className="contact_container">
        <p>
          Email : <span>indhumathiganesan27@gmail.com</span>
        </p>
        <p>
          GitHub : <span>@Indhumathi</span>
        </p>
        <p>
          Linked In : <span>@indhumathig</span>
        </p>
        <div className="contact_icon">
          <a href="indhumathiganesan27@gmail.com">
            <IconButton>
              <MdMarkEmailRead />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/indhumathi-ganesan-298350282/">
          <IconButton >
              <FaLinkedin  />
            </IconButton>

          </a>
          <a href="https://github.com/indhumathi2702">
          <IconButton>
            <LiaGithub />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
