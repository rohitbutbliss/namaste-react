const Search = (props) => {
  const { searchText } = props;

  return (
    <div className="search">
      <img
        src={require("../../../node_modules/iconoir/icons/search.svg")}
        alt="search"
      />
      <input
        onChange={(e) => {
          props.handleChangeInInput(e.target.value.trim());
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") props.handleSearchEnter(e.target.value.trim());
        }}
        type="text"
        name="search-input"
        id="search-input"
        placeholder="Search"
        autoComplete="off"
      />
    </div>
  );
};

export default Search;
