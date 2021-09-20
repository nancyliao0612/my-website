import React from "react";
import { links } from "./data";
import { AiOutlinePlus } from "react-icons/ai";
import { useGlobalContext } from "./Context";

const Menu = () => {
  const { isMenuOpen, closeMenu } = useGlobalContext();
  return (
    <aside className={`${isMenuOpen ? "menu show-menu" : "menu"}`}>
      <div>
        <button className="close-btn" onClick={closeMenu}>
          <AiOutlinePlus />
        </button>
      </div>
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
    </aside>
  );
};

export default Menu;
