const Location = (props) => {
  const { updateLatitudeLongitude, updateIsModalActive } = props;

  return (
    <div
      className="location"
      onClick={async () => {
        await updateIsModalActive();
        updateLatitudeLongitude(
          JSON.parse(localStorage.getItem("lat")),
          JSON.parse(localStorage.getItem("lon"))
        );
      }}
    >
      <img
        src={require("../../node_modules/iconoir/icons/pin-alt.svg")}
        alt="location"
      />
    </div>
  );
};

export default Location;
