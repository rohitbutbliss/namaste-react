const LocationModal = (props) => {
  const { isModalActive, updaterFunction } = props;
  return (
    <div
      style={{}}
      className={isModalActive ? "modal-overlay active" : "modal-overlay"}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          gap: "20px",
          padding: "20px",
          borderRadius: "20px",
        }}
        className="modal"
      >
        <img
          style={{ maxHeight: "300px" }}
          src={require("../images/no-permission.png")}
          alt="no-permission"
        />
        <h2>Oops!</h2>
        <p style={{ textAlign: "center" }}>
          Please allow us location permission to use this feature
        </p>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            width: "100%",
            fontSize: "18px",
            borderRadius: "6px",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            updaterFunction();
          }}
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default LocationModal;
