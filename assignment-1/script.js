// Using plain javascript to solve

// const heading = document.createElement("h1");
// heading.textContent = "Hello World in Javascript";

// const root = document.getElementById("root");
// root.append(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "I am h1 of child 1"),
    React.createElement("h2", {}, "I am h2 of child 2"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "I am h1 of child 2"),
    React.createElement("h2", {}, "I am h2 of child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);
