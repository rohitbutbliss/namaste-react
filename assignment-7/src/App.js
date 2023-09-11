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

const root = ReactDOM.createRoot(document.querySelector("#root"));

const AppLayout = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const updateIsModalActive = () => {
    setIsModalActive(!isModalActive);
  };
  return (
    <div className={isModalActive ? "app modal-active" : "app"}>
      <LocationModal
        isModalActive={isModalActive}
        updaterFunction={updateIsModalActive}
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
