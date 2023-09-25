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
import RestaurantMenu from "./components/RestaurantMenu";
import useIsModalActive from "./utils/useIsModalActive";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const AppLayout = () => {
  const lat = JSON.parse(localStorage.getItem("lat"));
  const lon = JSON.parse(localStorage.getItem("lon"));

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

  const { isModalActive, setIsModalActive, updateIsModalActive } =
    useIsModalActive(setLocationUpdateStatus, updateLatitudeLongitude);

  return !locationUpdateStatus ? (
    <DefaultHomePage
      isModalActive={isModalActive}
      updateIsModalActive={updateIsModalActive}
      setIsModalActive={setIsModalActive}
      updateLocationUpdateStatus={setLocationUpdateStatus}
      locationUpdateStatus={locationUpdateStatus}
      updateLatitudeLongitude={updateLatitudeLongitude}
    />
  ) : (
    <div
      className={
        isModalActive || isSearchModalActive ? "app modal-active" : "app"
      }
    >
      <SearchModal
        updateLatitudeLongitude={updateLatitudeLongitude}
        updateSearchModalStatus={setIsSearchModalActive}
        isSearchModalActive={isSearchModalActive}
      />
      <LocationModal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
      <Header
        updateIsModalActive={updateIsModalActive}
        updateSearchModalStatus={setIsSearchModalActive}
      />
      <main>
        <div className="body">
          <Outlet context={[currentLatitude, currentLongitude]} />
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
      {
        path: "/restaurants/menu/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
