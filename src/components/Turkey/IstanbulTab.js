import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function IstanbulTab({ tabs, filterCards }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark-tab-option tab-option" : "tab-option"}>
      {tabs.map((tab, id) => {
        return (
          <p
            className={theme ? "dark-tab-option-option" : "tab-option-option"}
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
