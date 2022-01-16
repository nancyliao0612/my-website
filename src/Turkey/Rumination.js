import React from "react";
import { Link } from "react-router-dom";

const Rumination = () => {
  return (
    <section className="istanbul-section">
      <div className="article-section">
        <div className="article-container-2">
          <Link to="/ruminationArticle">
            <img
              src="https://i.imgur.com/OAEhsFy.jpg"
              alt="galata-tower"
              className="istanbul-pic"
            />
          </Link>
          <h3 className="istanbul-title">
            【有感而發】五件希望我當初交換就知道的事情
          </h3>
          <p className="istanbul-intro"></p>
          <Link to="/ruminationArticle">
            <img className="read-more" src="https://i.imgur.com/zRVuAej.jpg" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Rumination;
