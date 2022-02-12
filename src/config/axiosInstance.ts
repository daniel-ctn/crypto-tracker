import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/coins',
  timeout: 1000,
  headers: {
    "Content-type": "application/json"
  }
});