import React from "react";
import ReactDOM from "react-dom/client";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  return <div className="bg-red-600 text-white text-[50px]">App</div>;
};

const appRouter = createBrowserRouter([
  {
    element: <App />,
    path: "/",
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
