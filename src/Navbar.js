import React, { useState } from "react";
import { links } from "./data";
import { AiOutlineMenu } from "react-icons/ai";
import { AppContext, useGlobalContext } from "./Context";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { openMenu } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center" id="home">
        <div className="nav-header">
          <a href="/">
            <img
              src="https://i.imgur.com/aixH85L.png"
              className="logo"
              alt="logo"
            />
          </a>
          <button className="nav-toggle" onClick={openMenu}>
            <AiOutlineMenu />
          </button>
        </div>
        {/* 原本寫法 {showLinks && (<div>...</div>) } 但這樣子如果沒有先點擊 FaBars 的話，拉長螢幕時就無法顯示選單文字！*/}
        {/* <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        >
          <ul className="links">
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
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
