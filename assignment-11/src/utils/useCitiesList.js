import { useState } from "react";
import { City } from "country-state-city";

const useCitiesList = (cityPrefix) => {
  const [citiesList, setCitiesList] = useState([]);

  const getCity = (cityPrefix) => {
    const currentCities = City.getCitiesOfCountry("IN").filter((city) =>
      city.name.toLowerCase().startsWith(cityPrefix.toLowerCase())
    );
    setCitiesList(currentCities);
  };

  getCity(cityPrefix);

  return citiesList;
};

export default useCitiesList;
