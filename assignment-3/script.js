import React from "react";
import ReactDOM from "react-dom/client";

// header using React.createELement
const normalHeader = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "I am h1 of normal header"),
  React.createElement("h2", {}, "I am h2 of normal header"),
  React.createElement("h3", {}, "I am h3 of normal header"),
]);

// header using JSX.
const jsxHeader = (
  <div className="title">
    <h1>I am h1 of jsx header</h1>
    <h2>I am h2 of jsx header</h2>
    <h3>I am h3 of jsx header</h3>
  </div>
);

// header using functional component and composition of component

const HeadingH1 = () => <h1>I am h1 of functional component header</h1>;
const HeadingH2 = () => <h2>I am h2 of functional component header</h2>;
const HeadingH3 = () => <h3>I am h3 of functional component header</h3>;

const HeaderComponentV2 = () => {
  return (
    <div className="title">
      <HeadingH1 />
      <HeadingH2 />
      <HeadingH3 />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

// rendering header using all three methods
root.render(normalHeader);
root.render(jsxHeader);
root.render(<HeaderComponentV2 />);

const Logo = () => {
  return (
    <div className="logo">
      <img src={require("./images/logo.jpg")} alt="logo" />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search">
      <input
        type="search"
        name="search"
        id="search-input"
        autoComplete="off"
        placeholder="Seach"
      />
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
};

const UserIcon = () => {
  return (
    <div className="user-icon">
      <ion-icon name="person-circle-outline"></ion-icon>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <header>
      <Logo />
      <SearchBar />
      <UserIcon />
    </header>
  );
};

root.render(<HeaderComponent />);
