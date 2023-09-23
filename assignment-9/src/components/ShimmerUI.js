const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img"></div>
      <div className="shimmer-text">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const ShimmerUI = () => {
  return (
    <div className="shimmer">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default ShimmerUI;
