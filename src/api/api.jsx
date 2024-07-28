import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

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
