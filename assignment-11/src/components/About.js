import User from "./User";
import useUserList from "../utils/useUserList";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";

const About = () => {
  const userList = useUserList();
  const onlineStatus = useOnlineStatus();

  console.log(onlineStatus);
  return !onlineStatus ? (
    <OfflinePage />
  ) : (
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
