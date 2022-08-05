import axios from "axios";

export const instanceAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENV_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
