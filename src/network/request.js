import axios from 'axios'
export function request(config) {
const instance=axios.create({
    timeout:1000,
    baseURL:''
    })
    
//拦截 比如携带token值
//请求拦截
instance.interceptors.request.use(config=>{
    //请求头携带token
   //config.headers.Authorization=window.sessionStorage.getItem('token')
  return config
    },err=>{})
//响应拦截
instance.interceptors.response.use(config=>{
    return config
      },err=>{})

    return instance(config)
}