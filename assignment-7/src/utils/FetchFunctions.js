import { City } from "country-state-city";

const fetchIP = async () => {
  let ip = await fetch("https://api64.ipify.org?format=json");
  ip = await ip.json();
  console.log(ip);
  return ip;
};
//api.ipgeolocation.io/ipgeo?apiKey=f7108121067647768e771fa850aa14a7

const getCity = (cityPrefix) => {
  return City.getCitiesOfCountry("IN").filter((city) =>
    city.name.toLowerCase().startsWith(cityPrefix.toLowerCase())
  );
};

export { fetchIP, getCity };
