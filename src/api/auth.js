// src/api/auth.js
import axios from "axios";

// Create a single axios instance for your API
export const api = axios.create({
  baseURL: "https://recipe-backend-g4n2.onrender.com/api/",
  headers: { "Content-Type": "application/json" },
});
api.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
// ---- Auth helpers -------------------------------------------------

export const signup = (username, email, password) =>
  api.post("auth/signup/", { username, email, password });

export const login = (username, password) =>
  api.post("auth/login/", { username, password });

// You can add more helpers later, e.g. refreshToken, logout, etc.
