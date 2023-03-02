import axios from "axios";

const apiURLs = {
    development: "http://localhost:4002",
    production: "https://busy-puce-duck-wig.cyclic.app",
};

const api = axios.create({ baseURL: apiURLs[process.env.NODE_ENV] });

api.interceptors.request.use((config) => {
    const loggedInUserJSON = localStorage.getItem("loggedInUser");

    const parsedLoggedInUser = JSON.parse(loggedInUserJSON || '""');

    if (parsedLoggedInUser.token) {
      config.headers = { Authorization: `Bearer ${parsedLoggedInUser.token}` };
    }
  
    return config;
  });
  
  export { api };