import axios from "axios";

const mainBaseURL = axios.create({
  baseURL: "https://6666a4e5a2f8516ff7a42f0f.mockapi.io/youtube-clone",
});

mainBaseURL.interceptors.request.use((req) => {
  const token = localStorage.getItem("x-auth-token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default mainBaseURL;
