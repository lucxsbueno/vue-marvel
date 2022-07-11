import axios from "axios";

const api = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
  timeout: 5000,
  params: {
    ts: process.env.VUE_APP_TIMESTAMP,
    apikey: process.env.VUE_APP_PUBLIC_API_KEY,
    hash: process.env.VUE_APP_HASH_API_KEY
  }
});

export default api;