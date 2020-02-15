import axios from "axios";
import rateLimit from "axios-rate-limit";
const http = rateLimit(axios.create(), { maxRPS: 0 });
const planet_url = `https://swapi.co/api/planets/?search=`;

const setNetworkRequestLimit = (maxRequests, perMilliseconds) => {
  if (maxRequests === undefined && perMilliseconds === undefined) {
    maxRequests = 10000;
    perMilliseconds = 0;
  }

  http.setRateLimitOptions({
    maxRequests: maxRequests,
    perMilliseconds: perMilliseconds
  });
  
  const getPlanetSuggestions = query => http.get(`${planet_url}${query}`);
  return { getPlanetSuggestions };
};

export { setNetworkRequestLimit };