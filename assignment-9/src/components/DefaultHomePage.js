import { useState, useRef } from "react";
import TextTransition, { presets } from "react-text-transition";
import Footer from "./Footer";
import LocationModal from "./LocationModal";
import { getCity } from "../utils/FetchFunctions";
import useTextAnimation from "../utils/useTextAnimation";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";

const DefaultHomePage = (props) => {
  const {
    updateIsModalActive,
    isModalActive,
    setIsModalActive,
    updateLocationUpdateStatus,
    locationUpdateStatus,
    updateLatitudeLongitude,
  } = props;

  const onlineStatus = useOnlineStatus();

  const TEXTS = [
    "Hungry?",
    "Unexpected Guests?",
    "Cooking gone wrong?",
    "Movie marathon?",
    "Game night?",
    "Late night at office?",
  ];

  const currentIndex = useTextAnimation(TEXTS);
  const [searchResult, setSearchResult] = useState([]);
  let searchDebounce = useRef(null);

  return (
    <>
      {!onlineStatus ? (
        <OfflinePage />
      ) : (
        <div className={isModalActive ? "app modal-active" : "app"}>
          <div></div>
          <LocationModal
            isModalActive={isModalActive}
            updaterFunction={updateIsModalActive}
            setIsModalActive={setIsModalActive}
          />
          <div className="default-body">
            <div className="default-main">
              <div className="top-container">
                <div className="default-logo-img">
                  <img src={require("../images/logo.png")} alt="" />
                </div>
                <div className="default-top-btn">
                  <Link to={"/about"}>
                    <button className="default-login-btn">Login</button>
                  </Link>
                  <button className="default-signup-btn">Signup</button>
                </div>
              </div>
              <div className="default-container">
                <div className="default-container-content">
                  <TextTransition springConfig={presets.gentle}>
                    {TEXTS[currentIndex]}
                  </TextTransition>
                  <p>Order food from favourite restaurants near you.</p>
                  <div className="default-search">
                    <div className="default-search-box">
                      <input
                        type="text"
                        name="query"
                        id="default-search-input"
                        placeholder="Search your city"
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
                      <div
                        className={
                          searchResult.length === 0
                            ? "default-search-results hidden"
                            : "default-search-results"
                        }
                      >
                        {searchResult.map((city) => {
                          const { name, longitude, latitude } = city;
                          return (
                            <div
                              className="default-search-result"
                              key={name + longitude + latitude}
                              onClick={() => {
                                updateLocationUpdateStatus(
                                  !locationUpdateStatus
                                );
                                localStorage.setItem(
                                  "lat",
                                  JSON.stringify(latitude)
                                );
                                localStorage.setItem(
                                  "lon",
                                  JSON.stringify(longitude)
                                );
                                updateLatitudeLongitude(latitude, longitude);
                              }}
                            >
                              {name}{" "}
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

                    <div
                      className="default-location"
                      onClick={() => {
                        updateIsModalActive();
                      }}
                    >
                      <img
                        src={require("../../node_modules/iconoir/icons/add-circle.svg")}
                        alt="location"
                      />
                      <span>Locate Me</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default DefaultHomePage;
