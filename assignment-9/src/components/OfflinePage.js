const OfflinePage = () => {
  return (
    <div className="no-result">
      <p style={{ textAlign: "center" }}>Looks like, you're offline</p>
      <img src={require("../images/no-results.png")} alt="" />
    </div>
  );
};

export default OfflinePage;
