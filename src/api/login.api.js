import axios from "axios";
const poeple_url = `https://swapi.co/api/people/?search=`;
const getLoginUser = query => axios.get(`${poeple_url}${query}`);

export { getLoginUser };
