import React from 'react'
import hiking_pic from "./picture/hiking-大霸.JPG"

const Latesthikes = () => {
  return (
    <section className="hike-section">
      <div className="title-container">
        <h1>Latest Hikes</h1>
        <div className="underline-2"></div>
      </div>
      <div className="article-section">
        <div className="article-container">
          <img src={hiking_pic} alt="pic" className="hiking-pic"/>
          <div className="mountain-container">
            <h2 className="mountain-style">大霸尖山</h2>
            <div className="name-style">
            <div className="text-center">
              <span>大霸尖山</span>
              <p>3492m</p>
            </div>
            <div className="text-center">
              <span>小霸尖山</span>
              <p>3492m</p>
            </div>
            <div className="text-center">
              <span>伊澤山</span>
              <p>3492m</p>
            </div>
            <div className="text-center">
              <span>加利山</span>
              <p>3492m</p>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Latesthikes
