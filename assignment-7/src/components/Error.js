import Footer from "./Footer";
import Header from "./Header";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <main>
      <div className="app">
        <Header />
        <div
          className="body"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Oops! Something Went Wrong</h1>
          <img
            style={{ maxWidth: "180px", width: "100%" }}
            src={require("../images/no-results.png")}
            alt="error"
          />
          <h1 style={{ textAlign: "center" }}>
            {error.status} : {error.statusText}
          </h1>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Error;
