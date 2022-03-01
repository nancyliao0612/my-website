function CodingTab({ codingTabs, filterCodeProject }) {
  return (
    <div className="istanbul-tab">
      {codingTabs.map((tab, id) => {
        return (
          <p
            key={id}
            className="istanbul-tab-option"
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
