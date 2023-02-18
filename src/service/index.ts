import axios from "axios";

const api = axios.create({
  baseURL: "https://api.reddit.com/r/pics/"
});

export default api;