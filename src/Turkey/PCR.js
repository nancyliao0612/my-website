import React from "react";
import { Link } from "react-router-dom";

const PCR = () => {
  return (
    <section className="istanbul-section">
      <div className="article-section">
        <div className="article-container-2">
          <Link to="/PcrArticle">
            <img
              src="https://i.imgur.com/dePDg6q.jpg?2"
              alt="hospital"
              className="istanbul-pic"
            />
          </Link>
          <h3 className="istanbul-title">
            【防疫特集】等待 PCR 結果度秒如年！在伊斯坦堡公立醫院做 PCR 檢測
          </h3>
          <p className="istanbul-intro"></p>
          <Link to="/PcrArticle">
            <img className="read-more" src="https://i.imgur.com/zRVuAej.jpg" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PCR;
