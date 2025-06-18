import axios from "axios";
import apiConfig from "./apiConfig";

let USER_ROUTE = "/user/v1";
let PUBLIC_ROUTE = "/public/v1";
let BASE_URL = apiConfig.BASE_URL + USER_ROUTE;
let FGIIT_BASE_URL = apiConfig.FGIIT_BASE_URL + USER_ROUTE;
let PUBLIC_URL = apiConfig.BASE_URL + PUBLIC_ROUTE;

//User URL
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const authorization = localStorage.getItem("GCS_user_authorization");

    if (authorization) {
      config.headers["authorization"] = authorization;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Public URL
export const publicAxiosInstance = axios.create({
  baseURL: PUBLIC_URL,
});

publicAxiosInstance.interceptors.request.use(
  (config) => {
    const authorization = localStorage.getItem("GCS_user_authorization");

    if (authorization) {
      config.headers["authorization"] = authorization;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//FGIIT User URL
export const fgiitAxiosInstance = axios.create({
  baseURL: FGIIT_BASE_URL,
});

fgiitAxiosInstance.interceptors.request.use(
  (config) => {
    const authorization = localStorage.getItem("fg_group_user_authorization");

    if (authorization) {
      config.headers["authorization"] = authorization;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
