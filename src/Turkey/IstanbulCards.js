import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const IstanbulCard = ({ cardData }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {cardData.map((card) => {
        return (
          <div className="article-section">
            <div className="article-container-2">
              <Link to={card.link}>
                <img
                  src={card.coverImg}
                  alt="galata-tower"
                  className="istanbul-pic"
                />
              </Link>
              <div
                className={
                  theme ? "content-for-darkMode" : "istanbul-article-containter"
                }
              >
                <h3 className="istanbul-title">{card.title}</h3>
                <p className="istanbul-intro">{card.discription}</p>
                <Link to={card.link}>
                  <img
                    className="read-more"
                    src="https://i.imgur.com/ykuByb4.png"
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default IstanbulCard;
