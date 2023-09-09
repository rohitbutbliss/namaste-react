import { useState } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const { handleSearchEnter } = props;
  console.log("search rendered");

  return (
    <div className="search">
      <img
        onClick={() => {
          handleSearchEnter(searchText);
        }}
        style={{ cursor: "pointer" }}
        src={require("../../node_modules/iconoir/icons/search.svg")}
        alt="search"
      />
      <input
        onChange={(e) => {
          setSearchText(e.target.value.trim());
          if (e.target.value.trim() === "")
            handleSearchEnter(e.target.value.trim());
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearchEnter(searchText);
          }
        }}
        type="text"
        name="search-input"
        id="search-input"
        placeholder="Search"
        autoComplete="off"
        value={searchText}
      />
    </div>
  );
};

export default Search;
