import { useState, useRef } from "react";
import { getCity } from "../utils/FetchFunctions";

const SearchModal = (props) => {
  const {
    isSearchModalActive,
    updateSearchModalStatus,
    updateLatitudeLongitude,
  } = props;
  const [searchResult, setSearchResult] = useState([]);
  let searchDebounce = useRef(null);

  return (
    <div
      style={{}}
      className={isSearchModalActive ? "modal-overlay active" : "modal-overlay"}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "300px",
          display: "flex",
          height: "250px",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          gap: "20px",
          padding: "10px",
          borderRadius: "20px",
        }}
        className="modal"
      >
        <div
          className="modal-search-input"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <img
            width="28px"
            style={{ padding: "5px", cursor: "pointer" }}
            src={require("../../node_modules/iconoir/icons/arrow-left.svg")}
            alt="back"
            onClick={updateSearchModalStatus}
          />
          <input
            type="text"
            placeholder="Search City"
            style={{
              width: "100%",
              padding: "5px",
            }}
            autoComplete="off"
            onChange={(e) => {
              const input = e.target.value.trim();
              if (input === "") {
                clearTimeout(searchDebounce);
                setSearchResult([]);
              } else {
                clearTimeout(searchDebounce);
                searchDebounce = setTimeout(() => {
                  setSearchResult(getCity(input));
                }, 500);
              }
            }}
          />
        </div>
        <div
          className="modal-search-results"
          style={{ width: "100%", overflow: "scroll" }}
        >
          {searchResult.map((result) => {
            const { name, longitude, latitude } = result;
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  localStorage.setItem("lat", JSON.stringify(latitude));
                  localStorage.setItem("lon", JSON.stringify(longitude));
                  updateLatitudeLongitude(latitude, longitude);
                  updateSearchModalStatus();
                }}
                key={name + longitude + latitude}
              >
                {name}
                <span style={{ fontSize: "10px" }}>
                  {Number(latitude).toFixed(3) +
                    ", " +
                    Number(longitude).toFixed(3)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
