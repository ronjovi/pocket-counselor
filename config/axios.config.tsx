import axios from "axios";

const axiosInstance = axios.create({
   //baseURL: "",
  baseURL: "http://4634-76-175-119-129.ngrok.io/pocket-counselor",
});

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

export default axiosInstance;
