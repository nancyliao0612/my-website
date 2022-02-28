function IstanbulTab({ tabs, filterCards }) {
  return (
    <div className="istanbul-tab">
      {tabs.map((tab, id) => {
        return (
          <p
            className="istanbul-tab-option"
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
