import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Navbar";
import App from "./App";
import Footer from "./Footer";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";
import Hiking from "./Hiking";
import HikingDB from "./HikingDB";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FaHiking } from "react-icons/fa";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/hiking">
        <Hiking />
      </Route>
      <Route path="/HikingDB">
        <HikingDB />
      </Route>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
