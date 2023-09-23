import { useEffect, useState } from "react";
import User from "./User";

const About = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("https://api.github.com/users");
      const json = await data.json();
      setUserList(json);
    })();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {userList.map((user) => (
        <User userData={user} key={user.id} />
      ))}
    </div>
  );
};

export default About;
