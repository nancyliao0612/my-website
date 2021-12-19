import React from "react";
import { Link } from "react-router-dom";

const Pamukkale = () => {
  return (
    <section className="istanbul-section">
      <div className="article-section">
        <div className="article-container-2">
          <Link to="/pamukkaleArticle">
            <img
              src="https://i.imgur.com/i17Ordm.jpg"
              alt="PamukkalePic"
              className="istanbul-pic"
            />
          </Link>
          <h3 className="istanbul-title">
            【趴趴走👣】冬季訪雪白棉堡（Pamukkale）
          </h3>
          <p className="istanbul-intro">
            Pamukkale 是由兩個土耳其文組成，pamuk 意指「棉」；kale
            指的是「碉堡」，因此 Pamukkale 又名「棉花堡」...
          </p>
          <Link to="/pamukkaleArticle">
            <img className="read-more" src="https://i.imgur.com/zRVuAej.jpg" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pamukkale;
