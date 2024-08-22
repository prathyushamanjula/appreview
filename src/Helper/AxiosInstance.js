import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://facebook.quantumparadigm.in:1824",
    // baseURL: "http://localhost:1824"
})

export default axiosInstance;