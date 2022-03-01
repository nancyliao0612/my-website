function CodingProject({ codeProjects }) {
  return (
    <>
      {codeProjects.map((codeProject) => {
        return (
          <div className="coding-container" key={codeProject.id}>
            <a href={codeProject.link} target="_blank">
              <img
                src={codeProject.imageLink}
                alt="codeProject"
                className="code-project"
              />
            </a>
          </div>
        );
      })}
    </>
  );
}

export default CodingProject;
