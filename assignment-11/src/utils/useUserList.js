import { useState, useEffect } from "react";

const useUserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("https://api.github.com/users");
      const json = await data.json();
      setUserList(json);
    })();
  }, []);

  return userList;
};

export default useUserList;
