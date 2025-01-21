// axiosService.js
import axios from "axios";
import { getToken } from "../Services/authService";

const instance = axios.create({
  // Your base URL and other configurations
  baseURL: "https://localhost:5001",
  headers: {
    "Content-Type": "application/json",
    Token: getToken(),
  },
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // You can modify the request config here
    // For example, add authentication headers
    // config.headers.Authorization = `Bearer ${yourAuthToken}`;
    // Add the token dynamically
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // You can modify the response here
    return response.data;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

// Define methods for different HTTP verbs
const axiosService = {
  get: (url, config) => instance.get(url, config),
  fetchget: (url, data, config) => instance.get(url, data, config),

  post: (url, data, config) => instance.post(url, data, config),
  put: (url, data, config) => instance.put(url, data, config),
  delete: (url, config) => instance.delete(url, config),
};

export default axiosService;
