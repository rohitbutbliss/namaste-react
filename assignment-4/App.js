import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const AppLayout = () => {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main>
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

root.render(<AppLayout />);
