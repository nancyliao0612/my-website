import React from "react";
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
import RuminationArticle from "./Turkey/RuminationArticle";
import Coding from "./coding/Coding";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <React.StrictMode>
      <AppProvider>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Menu />
        <Router>
          <Route exact path="/">
            <Home darkMode={darkMode} />
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
            <Turkey darkMode={darkMode} />
          </Route>
          <Route path="/RuminationArticle">
            <RuminationArticle darkMode={darkMode} />
          </Route>
          <Route path="/PcrArticle">
            <PcrArticle />
          </Route>
          <Route path="/PamukkaleArticle">
            <PamukkaleArticle />
          </Route>
          <Route path="/IstanbulFirst">
            <IstanbulFirst darkMode={darkMode} />
          </Route>
        </Router>
        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </AppProvider>
    </React.StrictMode>
  );
}

export default App;
