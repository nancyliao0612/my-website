import React from "react";
import facebook from "../icon/facebook.png";
import instagram from "../icon/instagram.png";
import linkedin from "../icon/linkedin.png";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-icons">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={linkedin} alt="linkedin" />
      </div>
      <h6 className="footer-copyright">
        © 2021 Nancy Liao. All Rights Reserved.
      </h6>
    </section>
  );
};

export default Footer;
