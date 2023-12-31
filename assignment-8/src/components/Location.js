const Location = (props) => {
  const { updateLatitudeLongitude, updateIsModalActive } = props;

  return (
    <div
      className="location"
      onClick={() => {
        updateIsModalActive();
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
