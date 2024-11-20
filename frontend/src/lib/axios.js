import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "https://ecomerce-site-ml5t.onrender.com" : "/api",
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
