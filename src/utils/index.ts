import axios from "axios";
import { ref } from "vue";

 const htpp = ref('/api')
 const httpInstance = axios.create({
  baseURL:'http://localhost:3000',
  timeout: 5000,
})


//axios请求拦截器
httpInstance.interceptors.request.use(config =>{
  return config
}, e => Promise.reject(e))

//axios响应拦截器
httpInstance.interceptors.response.use(res => res.data, e =>{
  
  return Promise.reject(e)
})

export default httpInstance