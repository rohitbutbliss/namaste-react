import Footer from "./Footer";
import Header from "./Header";

const Error = () => {
  return (
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
        <h1 style={{ textAlign: "center" }}>Something Went Wrong</h1>
        <img
          style={{ maxWidth: "180px", width: "100%" }}
          src={require("../images/no-results.png")}
          alt="error"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Error;
