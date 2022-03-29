import React, { useContext } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { ThemeContext } from "./context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={theme ? "footer-dark-wrapper" : "footer-wrapper"}>
      <section className="footer-section">
        <div
          className={theme ? "footer-icons-dark footer-icons" : "footer-icons"}
        >
          <a href="https://www.facebook.com/profile.php?id=100003369163974">
            <BsFacebook />
          </a>
          <a href="https://www.instagram.com/nancyliao0612/">
            <BsInstagram />
          </a>
          <a href="https://www.linkedin.com/in/nancy-liao-a6855b13b/">
            <BsLinkedin />
          </a>
        </div>
        <h6 className="footer-copyright">
          © 2022 Nancy Liao. All Rights Reserved.
        </h6>
      </section>
    </footer>
  );
};

export default Footer;
