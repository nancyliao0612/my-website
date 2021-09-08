import React, { useState } from "react";
import webLogo from "./webLogo.svg";
import { links } from "./data";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={webLogo} className="logo" alt="logo" />
          </a>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        {/* 原本寫法 {showLinks && (<div>...</div>) } 但這樣子如果沒有先點擊 FaBars 的話，拉長螢幕時就無法顯示選單文字！*/}
        <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        >
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
