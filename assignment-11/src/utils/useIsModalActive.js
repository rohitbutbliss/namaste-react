import { useState } from "react";

const useIsModalActive = (setLocationUpdateStatus, updateLatitudeLongitude) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const updateIsModalActive = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocationUpdateStatus(true);
        setIsModalActive(false);
        localStorage.setItem("lat", JSON.stringify(pos.coords.latitude));
        localStorage.setItem("lon", JSON.stringify(pos.coords.longitude));
        updateLatitudeLongitude(
          JSON.parse(localStorage.getItem("lat")),
          JSON.parse(localStorage.getItem("lon"))
        );
      },
      () => {
        setIsModalActive(true);
      }
    );
  };

  return { isModalActive, setIsModalActive, updateIsModalActive };
};

export default useIsModalActive;
