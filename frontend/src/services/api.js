import axios from "axios";

const API = axios.create({
  baseURL: "https://sql-query-optimizer-gstd.onrender.com",
});

export default API;