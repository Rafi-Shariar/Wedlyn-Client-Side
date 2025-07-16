import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const axiosInstance = axios.create({
  baseURL: "https://a12-server-kappa.vercel.app",
});
const useAxiosSecure = () => {
  const { user, logOutUser } = use(AuthContext);
  
  axiosInstance.interceptors.request.use((config) => {
    
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  //response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      if (err.response?.status === 401 || err.response?.status === 403) {
        
        logOutUser()
          .then(() => {})
          .catch(() => {});
      }
      return Promise.reject(err);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
