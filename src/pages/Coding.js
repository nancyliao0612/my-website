import codingData from "../data/codingData";
import { useState, useContext } from "react";
import CodingTab from "../components/Coding/CodingTab";
import CodingProject from "../components/Coding/CodingProject";
import { ThemeContext } from "../context/ThemeContext";

const allTabs = ["all", ...new Set(codingData.map((coding) => coding.tab))];

function Coding() {
  const [codingTabs, setCodingTabs] = useState(allTabs);
  const [codeProjects, setCodeProjects] = useState(codingData);
  const { theme } = useContext(ThemeContext);

  function filterCodeProject(tab) {
    if (tab === "all") {
      setCodeProjects(codingData);
      return;
    }
    const newCodeProject = codingData.filter(
      (codeProject) => codeProject.tab === tab
    );
    setCodeProjects(newCodeProject);
  }

  return (
    <section
      className={
        theme ? "coding-section dark-coding-section" : "coding-section"
      }
    >
      <div className="coding-huge-container">
        <img
          src="https://i.imgur.com/XQ7me3A.png"
          alt="coding"
          className="title-label"
        />
      </div>
      <CodingTab
        codingTabs={codingTabs}
        filterCodeProject={filterCodeProject}
      />
      <div className="placeInRow">
        <CodingProject codeProjects={codeProjects} />
      </div>
      <br />
      <br />
    </section>
  );
}

export default Coding;
