import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";
import axiosRetry from "axios-retry";
import { ACCESS_TOKEN } from "@/constants/configs";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const accessToken = Cookies.get(ACCESS_TOKEN);
  if (accessToken && accessToken !== "null") {
    config.headers["Authorization"] = `Token ${accessToken}`;
  } else {
    delete config.headers["Authorization"];
  }

  return config;
};

const onRequestError = (error: AxiosError) => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = async (error: AxiosError) => {
  // if (error?.response?.data?.error)
  // alert("Error!: " + error?.response?.data?.error);

  // if (!error.response) {
  //   exceptionHandlers.handle503();
  // }
  // const exceptionHandlersMethod = (status) => `handle${status}`;
  // // @ts-ignore
  // exceptionHandlers[exceptionHandlersMethod(error.response.status)]();

  if (error?.response?.status === 401) {
    // return logoutCleanUp();
    return false;
  }
  return Promise.reject(error?.response?.data);
};

const retryRequest = (axiosInstance: AxiosInstance) => {
  axiosRetry(axiosInstance, {
    retries: 1,
    retryDelay: (retryCount) => {
      return retryCount * 1500;
    },
  });
};

export const setupInterceptorsTo = (
  axiosInstance: AxiosInstance,
  withHeader = true
): AxiosInstance => {
  retryRequest(axiosInstance);
  if (withHeader) {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
  }
  axiosInstance.interceptors.response.use(onResponse, onResponseError);

  return axiosInstance;
};
