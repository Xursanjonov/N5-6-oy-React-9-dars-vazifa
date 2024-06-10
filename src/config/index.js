import axios from "axios";

const mainBaseURL = axios.create({
  baseURL: "https://ecommerceapi.firdavsdev.uz",
});

mainBaseURL.interceptors.request.use((req) => {
  const token = localStorage.getItem("x-auth-token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default mainBaseURL;
