const Search = () => {
  return (
    <div className="search">
      <img
        src={require("../../../node_modules/iconoir/icons/search.svg")}
        alt="search"
      />
      <input
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
