import React from "react";
import { AppProvider } from "./context/MenuContext";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Coding,
  Footer,
  Hiking,
  HikingDB,
  Home,
  IstanbulFirst,
  Menu,
  Navbar,
  PamukkaleArticle,
  PcrArticle,
  RuminationArticle,
  Turkey,
} from "./pages/index";

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
