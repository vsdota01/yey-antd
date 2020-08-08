/* eslint-disable no-console */
import axios from "axios";
const BASEURL = process.env.VUE_APP_URL;
const timeout = 30000;

const service = axios.create({
  baseURL: BASEURL,
  timeout,
});
// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    console.log();
    //调用时添加header：language="CN"或者language="EN"来区分中英文
    config.headers.language = localStorage.getItem("lang") || "CN";
    // 在发送请求之前做些什么‘
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    switch (response.status) {
      case 200:
        return response.data;
      default:
        return Promise.reject(response.data.message);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
