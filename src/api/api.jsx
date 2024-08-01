import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});
console.log(`Using API base URL: ${import.meta.env.VITE_API_BASE_URL}`);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data.message === "TokenExpired") {
      // Handle token expiration
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
      // Use navigate function to redirect
      const navigate = useNavigate();
      navigate("/login");
    }
    return Promise.reject(error);
  }
);

export default api;
