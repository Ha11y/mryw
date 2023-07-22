import axios from "axios";
const instance = axios.create({
    baseURL: 'https://interface.meiriyiwen.com',
    timeout: 5000,
  });
  instance.interceptors.request.use((config)=>{
  return config
  },(error)=>{
    return Promise.reject(error)
  })
  instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default instance