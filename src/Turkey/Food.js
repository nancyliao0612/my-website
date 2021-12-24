import React from "react";
import { Link } from "react-router-dom";

const Food = () => {
  return (
    <section className="istanbul-section">
      <div className="article-section">
        <div className="article-container-2">
          <Link to="/FoodcostArticle">
            <img
              src="https://i.imgur.com/wTfIVgs.jpg"
              alt="food"
              className="istanbul-pic"
            />
          </Link>
          <h3 className="istanbul-title">
            【生活實錄】生活在土耳其要打強心針，里拉一日暴跌15%，通膨高達 50%！
          </h3>
          <p className="istanbul-intro"></p>
          <Link to="/FoodcostArticle">
            <img className="read-more" src="https://i.imgur.com/zRVuAej.jpg" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Food;
