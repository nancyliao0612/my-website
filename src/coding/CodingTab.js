import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function CodingTab({ codingTabs, filterCodeProject }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme ? "dark-tab-option tab-option" : "tab-option"}>
      {codingTabs.map((tab, id) => {
        return (
          <p
            key={id}
            className="tab-option-option"
            onClick={() => filterCodeProject(tab)}
          >
            {tab}
          </p>
        );
      })}
    </div>
  );
}

export default CodingTab;
