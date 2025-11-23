import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Replace with your backend API
    withCredentials:true// To send cookies with requests
});

export default axiosInstance;

