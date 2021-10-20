import React from "react";
import { Link } from "react-router-dom";

const Istanbul = () => {
  return (
    <section className="istanbul-section">
      <img
        src="https://i.imgur.com/KOoHhDS.png"
        alt="istanbul"
        className="title-label"
      />
      <div className="article-section">
        <div className="article-container-2">
          <Link to="/IstanbulFirst">
            <img
              src="https://i.imgur.com/oIMLX61.jpg?1"
              alt=""
              className="istanbul-pic"
            />
          </Link>
          <h3 className="istanbul-title">
            在伊斯坦堡的怦然心動 – 與土耳其人初次的單獨會面
          </h3>
          <p className="istanbul-intro">
            這天是第一次單獨和 Anıl
            出來，我有點不知道該怎麼定義這個行程，我們先是去看了電影，接著去吃晚餐，再到酒吧小酌一番...
          </p>
          <Link to="/IstanbulFirst">
            <button className="read-more">Read More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Istanbul;