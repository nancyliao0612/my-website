import React, { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();
  return (
    <footer className={theme ? "footer-dark-wrapper" : "footer-wrapper"}>
      <section className="footer-section">
        <div
          className={theme ? "footer-icons-dark footer-icons" : "footer-icons"}
        >
          <a href="https://github.com/nancyliao0612" target="_blank">
            <BsGithub />
          </a>
          <a href="https://www.instagram.com/nancyliao0612/" target="_blank">
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/nancy-liao-a6855b13b/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>
        <h6 className="footer-copyright">
          © {currentYear} Nancy Liao. All Rights Reserved.
        </h6>
      </section>
    </footer>
  );
};

export default Footer;
