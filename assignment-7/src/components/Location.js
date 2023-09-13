const Location = (props) => {
  const { updaterFunction } = props;

  return (
    <div className="location" onClick={updaterFunction}>
      <img
        src={require("../../node_modules/iconoir/icons/pin-alt.svg")}
        alt="location"
      />
    </div>
  );
};

export default Location;
