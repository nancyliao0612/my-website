import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Navbar";
import Mypic from "./Mypic";
import About from "./About";
import Latesthikes from "./Latesthikes";
import Footer from "./Footer";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Mypic />
    <About />
    <Latesthikes />
    <Footer />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
