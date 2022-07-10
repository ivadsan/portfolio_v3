import React from "react";
import "./styles.scss";
import { GoMail } from "react-icons/go";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="mailto:cosmosoft.soluciones@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GoMail />
      </a>
      <a
        href="https://www.linkedin.com/in/ivadsan/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/ivadsan"
        rel="noopener noreferrer"
        target="_blank"
      >
      <FaGithub />
      </a>
    </div>
  );
}
