import { useState } from "react";

const Filter = (props) => {
  const [filterText] = props.stateVariables;
  return (
    <div className="filter">
      <div className="filter-value">{filterText}</div>
      <img
        src={require("../../../node_modules/iconoir/icons/filter-list.svg")}
        alt="filter-options"
      />
    </div>
  );
};

export default Filter;
