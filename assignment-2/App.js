import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "I am h1 of child 1"),
    React.createElement("h2", {}, "I am h2 of child 1"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "I am h1 of child 2"),
    React.createElement("h2", {}, "I am h2 of child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
