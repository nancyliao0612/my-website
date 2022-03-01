import codingData from "./codingData";
import { useState } from "react";
import CodingTab from "./CodingTab";
import CodingProject from "./CodingProject";

const allTabs = ["all", ...new Set(codingData.map((coding) => coding.tab))];

function Coding() {
  const [codingTabs, setCodingTabs] = useState(allTabs);
  const [codeProjects, setCodeProjects] = useState(codingData);

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
    <section className="coding-section">
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
