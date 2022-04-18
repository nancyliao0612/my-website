import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AppContext, useGlobalContext } from "../context/MenuContext";
import { ThemeContext } from "../context/ThemeContext";
import { links } from "../data/menuData";

const Navbar = () => {
  const { openMenu } = useGlobalContext();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={theme}>
      <div className="nav-center" id="home">
        <div className="nav-header">
          <div className="nav-left">
            <a href="/">
              <img
                src="https://i.imgur.com/JW2n9Qr.png?1"
                className="logo"
                alt="logo"
              />
            </a>
            <div className="toggler">
              <p className="toggler--light">Light</p>
              <div className="toggler--slider" onClick={toggleTheme}>
                <div className="toggler--slider--circle"></div>
              </div>
              <p className="toggler--dark">Dark</p>
            </div>
          </div>
          <button className="nav-toggle" onClick={openMenu}>
            <AiOutlineMenu />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
