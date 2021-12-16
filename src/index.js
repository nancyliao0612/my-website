import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./Context";
import "./index.css";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";
import Hiking from "./Hiking";
import HikingDB from "./HikingDB";
import Turkey from "./Turkey/Turkey";
import PamukkaleArticle from "./Turkey/PamukkaleArticle";
import FoodcostArticle from "./Turkey/FoodcostArticle";
import IstanbulFirst from "./Turkey/IstanbulFirst";
import PcrArticle from "./Turkey/PcrArticle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Navbar />
      <Menu />
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
        <Route path="/TurkeyArticles">
          <Turkey />
        </Route>
        <Route path="/FoodcostArticle">
          <FoodcostArticle />
        </Route>
        <Route path="/PcrArticle">
          <PcrArticle />
        </Route>
        <Route path="/pamukkaleArticle">
          <PamukkaleArticle />
        </Route>
        <Route path="/IstanbulFirst">
          <IstanbulFirst />
        </Route>
      </Router>
      <Footer />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
