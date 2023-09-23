import { useEffect, useState } from "react";

const User = (props) => {
  const { userData } = props;
  const { login: name, avatar_url: imageUrl } = userData;

  console.log("hey");
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
};

export default User;
