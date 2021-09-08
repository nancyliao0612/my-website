import React from "react";
import hiking_pic from "../picture/hiking-大霸.JPG";
import hiking_pic2 from "../picture/hiking-閂山.JPG";
import hiking_pic3 from "../picture/hiking-南湖.JPG";
import { Link } from "react-router-dom";

const Latesthikes = () => {
  return (
    <section className="hike-section">
      <div className="title-container">
        <h1>Latest Hikes</h1>
        <div className="underline-2"></div>
      </div>
      <div className="article-section">
        <Link to="/HikingDB">
          <div className="article-container">
            <img src={hiking_pic} alt="pic" className="hiking-pic" />
            <div className="mountain-container">
              <div className="name-style-1">
                <h2 className="mountain-style">大霸尖山</h2>
                <h6>2021/4/20~2021/4/22</h6>
              </div>
              <div className="name-style-2">
                <div className="text-center color-under">
                  <h5>大霸尖山</h5>
                  <p>(3492m)</p>
                </div>
                <div className="text-center color-under">
                  <h5>小霸尖山</h5>
                  <p>(3418m)</p>
                </div>
                <div className="text-center color-under-2">
                  <h5>伊澤山</h5>
                  <p>(3297m)</p>
                </div>
                <div className="text-center color-under-2">
                  <h5>加利山</h5>
                  <p>(3112m)</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* 第二篇 */}
      <div className="article-section">
        <div className="article-container">
          <img src={hiking_pic2} alt="pic" className="hiking-pic" />
          <div className="mountain-container">
            <div className="name-style-1">
              <h2 className="mountain-style">閂山鈴鳴</h2>
              <h6>2020/11/20~2020/11/21</h6>
            </div>
            <div className="name-style-2">
              <div className="text-center color-under-3">
                <h5>鈴鳴山</h5>
                <p>(3272m)</p>
              </div>
              <div className="text-center color-under-3 color-under-4">
                <h5>閂山</h5>
                <p>(3168m)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 第三篇 */}
      <div className="article-section">
        <div className="article-container">
          <img src={hiking_pic3} alt="pic" className="hiking-pic" />
          <div className="mountain-container">
            <div className="name-style-1">
              <h2 className="mountain-style">南湖大山</h2>
              <h6>2020/7/30~2020/8/02</h6>
            </div>
            <div className="name-style-2">
              <div className="text-center color-under">
                <h5>南湖北山</h5>
                <p>(3536m)</p>
              </div>
              <div className="text-center color-under">
                <h5>南湖主峰</h5>
                <p>(3740m)</p>
              </div>
              <div className="text-center color-under">
                <h5>南湖東峰</h5>
                <p>(3632m)</p>
              </div>
              <div className="text-center color-under">
                <h5>審馬陣山</h5>
                <p>(3141m)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latesthikes;
