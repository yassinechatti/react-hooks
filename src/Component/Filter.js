import React from "react";
const Filter = ({ inputT, setInputT }) => {
  const handleKeyUp = (e) => {
    setInputT(e.target.value);
  };

  return (
    <div>
      <label htmlFor="#filter" style={{ color: "white" }}>
        Filter
      </label>
      <input id="filter" value={inputT} onChange={handleKeyUp}></input>
    </div>
  );
};

export default Filter;
