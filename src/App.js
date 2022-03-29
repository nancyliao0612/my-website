import React from "react";
import { AppProvider } from "./Context";
import "./index.css";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import Home from "./Home";
import Hiking from "./Hiking";
import HikingDB from "./HikingDB";
import Turkey from "./Turkey/Turkey";
import PamukkaleArticle from "./Turkey/PamukkaleArticle";
import IstanbulFirst from "./Turkey/IstanbulFirst";
import PcrArticle from "./Turkey/PcrArticle";
import RuminationArticle from "./Turkey/RuminationArticle";
import Coding from "./coding/Coding";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
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
          <Route path="/coding">
            <Coding />
          </Route>
          <Route path="/HikingDB">
            <HikingDB />
          </Route>
          <Route path="/TurkeyArticles">
            <Turkey />
          </Route>
          <Route path="/RuminationArticle">
            <RuminationArticle />
          </Route>
          <Route path="/PcrArticle">
            <PcrArticle />
          </Route>
          <Route path="/PamukkaleArticle">
            <PamukkaleArticle />
          </Route>
          <Route path="/IstanbulFirst">
            <IstanbulFirst />
          </Route>
        </Router>
        <Footer />
      </AppProvider>
    </React.StrictMode>
  );
}

export default App;
