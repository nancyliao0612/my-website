import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function IstanbulTab({ tabs, filterCards }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark-istanbul-tab istanbul-tab" : "istanbul-tab"}>
      {tabs.map((tab, id) => {
        return (
          <p
            className={
              theme ? "dark-istanbul-tab-option" : "istanbul-tab-option"
            }
            key={id}
            onClick={() => filterCards(tab)}
          >
            {tab}
          </p>
        );
      })}
    </div>
  );
}

export default IstanbulTab;
