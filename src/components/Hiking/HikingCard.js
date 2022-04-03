import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const HikingCard = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="article-section">
        <div className="article-container-2">
          <Link to="/HikingDB">
            <img
              src="https://i.imgur.com/kO2EQik.jpg"
              alt="mountain"
              className="istanbul-pic"
            />
          </Link>
          <div
            className={
              theme ? "content-for-darkMode" : "istanbul-article-containter"
            }
          >
            <h3 className="istanbul-title">【獨攀】大霸尖山</h3>
            <p className="istanbul-intro">
              大霸尖山位於雪山山脈，自古是泰雅族的聖山，傳說是祖先的發源地，相傳大洪水時泰雅祖先爬到大霸躲過了洪水，並在大霸的周邊生活數百年...
            </p>
            <Link to="/HikingDB">
              <img
                className="read-more"
                src="https://i.imgur.com/ykuByb4.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HikingCard;
