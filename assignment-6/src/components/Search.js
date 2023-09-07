const Search = (props) => {
  const { handleSearchEnter, handleChangeInInput, searchText } = props;

  return (
    <div className="search">
      <img
        src={require("../../node_modules/iconoir/icons/search.svg")}
        alt="search"
      />
      <input
        onChange={(e) => {
          handleChangeInInput(e.target.value.trim());
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearchEnter(e.target.value.trim());
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
