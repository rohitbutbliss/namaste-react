import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import LocationModal from "./components/LocationModal";
import DefaultHomePage from "./components/DefaultHomePage";
import SearchModal from "./components/SearchModal";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const AppLayout = () => {
  const lat = JSON.parse(localStorage.getItem("lat"));
  const lon = JSON.parse(localStorage.getItem("lon"));

  const [isModalActive, setIsModalActive] = useState(false);
  const [isSearchModalActive, setIsSearchModalActive] = useState(false);
  const [locationUpdateStatus, setLocationUpdateStatus] = useState(
    lat !== null && lon !== null
  );
  const [currentLatitude, setCurrentLatitude] = useState(
    Number(Number(JSON.parse(localStorage.getItem("lat"))))
  );
  const [currentLongitude, setCurrentLongitude] = useState(
    Number(Number(JSON.parse(localStorage.getItem("lon"))))
  );

  const updateLatitudeLongitude = (lat, lon) => {
    setCurrentLatitude(lat);
    setCurrentLongitude(lon);
  };

  const updateIsModalActive = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocationUpdateStatus(true);
        setIsModalActive(false);
        localStorage.setItem("lat", JSON.stringify(pos.coords.latitude));
        localStorage.setItem("lon", JSON.stringify(pos.coords.longitude));
      },
      () => {
        setIsModalActive(true);
      }
    );
  };

  const turnOffModal = () => {
    setIsModalActive(false);
  };

  const updateSearchModalStatus = () => {
    setIsSearchModalActive(!isSearchModalActive);
  };

  const updateLocationUpdateStatus = () => {
    setLocationUpdateStatus(!locationUpdateStatus);
  };

  return !locationUpdateStatus ? (
    <DefaultHomePage
      isModalActive={isModalActive}
      updateIsModalActive={updateIsModalActive}
      turnOffModal={turnOffModal}
      updateLocationUpdateStatus={updateLocationUpdateStatus}
    />
  ) : (
    <div
      className={
        isModalActive || isSearchModalActive ? "app modal-active" : "app"
      }
    >
      <SearchModal
        updateLatitudeLongitude={updateLatitudeLongitude}
        updateSearchModalStatus={updateSearchModalStatus}
        isSearchModalActive={isSearchModalActive}
      />
      <LocationModal
        isModalActive={isModalActive}
        updaterFunction={updateIsModalActive}
        turnOffModal={turnOffModal}
      />
      <Header
        updateIsModalActive={updateIsModalActive}
        updateSearchModalStatus={updateSearchModalStatus}
      />
      <main>
        <div className="body">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
