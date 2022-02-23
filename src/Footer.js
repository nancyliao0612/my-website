import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-icons">
        <a href="https://www.facebook.com/profile.php?id=100003369163974">
          <BsFacebook className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/nancyliao0612/">
          <BsInstagram className="footer-icon" />
        </a>
        <a href="">
          <BsLinkedin className="footer-icon" />
        </a>
      </div>
      <h6 className="footer-copyright">
        © 2022 Nancy Liao. All Rights Reserved.
      </h6>
    </section>
  );
};

export default Footer;
