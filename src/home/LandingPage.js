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
        <img src="https://i.imgur.com/sCCHxnQ.png?2" alt="nancy-pic" />
      </section>
    </main>
  );
};

export default LandingPage;
