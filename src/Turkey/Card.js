import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="article-section">
      <div className="article-container-2">
        <Link to={props.link}>
          <img
            src={props.coverImg}
            alt="galata-tower"
            className="istanbul-pic"
          />
        </Link>
        <div className={props.darkMode ? "content-for-darkMode" : "istanbul-article-containter"}>
          <h3 className="istanbul-title">{props.title}</h3>
          <p className="istanbul-intro">{props.discription}</p>
          <Link to={props.link}>
            <img className="read-more" src="https://i.imgur.com/ykuByb4.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
