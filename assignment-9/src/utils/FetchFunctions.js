import { City } from "country-state-city";

const getCity = (cityPrefix) => {
  return City.getCitiesOfCountry("IN").filter((city) =>
    city.name.toLowerCase().startsWith(cityPrefix.toLowerCase())
  );
};

export { getCity };
