import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://realtime-chat-system-gozc.onrender.com" : "/api",
  withCredentials: true,
});
