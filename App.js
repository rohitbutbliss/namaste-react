const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "I'm h1 of child 2"),
    React.createElement("h2", {}, "I'm h2 of child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);
