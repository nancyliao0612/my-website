function IstanbulTab({ tabs, filterCards, darkMode }) {
  return (
    <div
      className={darkMode ? "dark-istanbul-tab istanbul-tab" : "istanbul-tab"}
    >
      {tabs.map((tab, id) => {
        return (
          <p
            className={
              darkMode ? "dark-istanbul-tab-option" : "istanbul-tab-option"
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
