import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "https://registry.npmjs.org/-/v1/",
  paramsSerializer: (params) => queryString.stringify(params),
});

// axiosClient.interceptors.request.use((config) => {});

axiosClient.interceptors.response.use((response) => {
  return response;
});

export default axiosClient;
