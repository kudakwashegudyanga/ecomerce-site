// import axios from "axios";

// const axiosInstance = axios.create({
// 	baseURL: import.meta.mode === "development" ? "https://ecomerce-site-ml5t.onrender.com" : "/api",
// 	withCredentials: true, // send cookies to the server
// });

// export default axiosInstance;

import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "https://ecomerce-site-ml5t.onrender.com" : "/api", // Correct production URL
    withCredentials: true,
});

export default axiosInstance;