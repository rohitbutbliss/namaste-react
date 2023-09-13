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

const root = ReactDOM.createRoot(document.querySelector("#root"));

const AppLayout = () => {
  const lat = JSON.parse(localStorage.getItem("lat"));
  const lon = JSON.parse(localStorage.getItem("lon"));

  const [isModalActive, setIsModalActive] = useState(false);
  const [locationUpdateStatus, setLocationUpdateStatus] = useState(
    lat !== null && lon !== null
  );

  const updateIsModalActive = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocationUpdateStatus(true);
        setIsModalActive(false);
        localStorage.setItem("lat", JSON.stringify(pos.coords.latitude));
        localStorage.setItem("lon", JSON.stringify(pos.coords.longitude));
      },
      () => setIsModalActive(true)
    );
  };

  const turnOffModal = () => {
    setIsModalActive(false);
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
    <div className={isModalActive ? "app modal-active" : "app"}>
      <LocationModal
        isModalActive={isModalActive}
        updaterFunction={updateIsModalActive}
        turnOffModal={turnOffModal}
      />
      <Header updateIsModalActive={updateIsModalActive} />
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
