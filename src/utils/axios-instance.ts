import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  // baseURL: "http://localhost:5000/api", 
  baseURL: (`${baseURL}/api`) 
});

// Add token to headers if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
