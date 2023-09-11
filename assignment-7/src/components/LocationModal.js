const LocationModal = (props) => {
  const { isModalActive, updaterFunction } = props;
  return (
    <div
      onClick={() => {
        updaterFunction();
      }}
      style={{}}
      className={isModalActive ? "modal-overlay active" : "modal-overlay"}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "300px",
          height: "100px",
          backgroundColor: "white",
        }}
        className="modal"
      >
        <h1 style={{ width: "100%" }}>
          dsffasfs fafdsa fdsfdsa fadsfa dsfadsadfs
        </h1>
      </div>
    </div>
  );
};

export default LocationModal;
