import React from "react";
import { Link } from "react-router-dom";

const Pamukkale = () => {
  return (
    <section className="istanbul-section">
      <div className="article-section">
        <div className="article-container-2">
          <Link to="/pamukkaleArticle">
            <img
              src="https://i.imgur.com/wTfIVgs.jpg"
              alt="PamukkalePic"
              className="istanbul-pic"
            />
          </Link>
          <h3 className="istanbul-title">
            【生活實錄】土耳其食品物價詳細清單整理 –
            蔬菜水果多少摳摳💰？牛奶超級便宜？
          </h3>
          <p className="istanbul-intro"></p>
          <Link to="/pamukkaleArticle">
            <button className="read-more">Read More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pamukkale;
