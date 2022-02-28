import React from "react";

const LandingPage = (props) => {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <section className="landing-page">
        <div className="blog-intro-container">
          <img
            src={
              props.darkMode
                ? "https://i.imgur.com/zSonPg5.png"
                : "https://i.imgur.com/qOG7EOf.png"
            }
            alt=""
            className="dark-leaf-special"
          />
          <h1>Hey There,</h1>
          <h1>I'm Nancy</h1>
          <p>Welcome to my blog! </p>
          <p className="landing-page-quote">
            I code the website from scratch to practice programming skills and
            share my enthusiasm of life. Topics include student exchange
            experiences in Istanbul, hiking, and coding. Stay tuned!
          </p>
          <img
            src="https://i.imgur.com/0KJNEaJ.png"
            alt="explore-leaf"
            className="explore-leaf"
          />
        </div>
        <img
          src="https://i.imgur.com/3ng32c0.png?1"
          alt="nancy-leaf"
          className="nancy-pic"
        />
      </section>
    </main>
  );
};

export default LandingPage;
