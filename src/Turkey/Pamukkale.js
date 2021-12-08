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
              alt="pamukkalePic"
              className="istanbul-pic"
            />
          </Link>
          <h3 className="istanbul-title">冬季訪雪白棉堡（Pamukkale）</h3>
          <p className="istanbul-intro">
            原以為這次的
            Pamukkale（棉堡）之旅會非常輕鬆愜意，不會有太多驚險與刺激的元素。
            但事實證明，我真的是大錯特錯...
          </p>
          <Link to="/pamukkaleArticle">
            <button className="read-more">Read More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pamukkale;
