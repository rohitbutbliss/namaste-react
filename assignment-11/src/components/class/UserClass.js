import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  async componentDidMount() {}
  render() {
    const { userData } = this.props;
    const { login: name, avatar_url: imageUrl } = userData;
    return (
      <div
        style={{
          width: "200px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
          backgroundColor: "#ffffff",
          borderRadius: "30px",
        }}
      >
        <img
          src={imageUrl}
          style={{ borderRadius: "20px", width: "100%" }}
          alt={name + " image"}
        />
        <p style={{ textAlign: "center" }}>Name : {name}</p>
      </div>
    );
  }
}

export default UserClass;
