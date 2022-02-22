import React from "react";

const LandingPage = (props) => {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <section className="landing-page">
        <div>
          <h1>Hey There,</h1>
          <h1>I'm Nancy</h1>
          <p>Welcome to my blog! </p>
        </div>
        <img
          src="https://i.imgur.com/0KJNEaJ.png"
          alt="explore-leaf"
          className="explore-leaf"
        />
        <img
          src="https://i.imgur.com/qOG7EOf.png"
          alt="dark-leaf-bg"
          className="dark-leaf"
        />
        <img
          src="https://i.imgur.com/QpcWu7Y.png?1"
          alt="nancy-pic"
          className="nancy-pic"
        />
      </section>
    </main>
  );
};

export default LandingPage;
