import axios from "axios";

const API = axios.create({
  baseURL: "https://royal-mobile.onrender.com/api"
});

export default API;