import axios from 'axios'
import { Message } from 'element-ui'
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// let token=''
// axios.defaults.headers.common['token'] = token;
import {getRefresh} from  '../auth'


const BASE_IPS = window.g.BASE_IPS

// create an axios instance
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL:BASE_IPS,
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
    config.headers['Content-Type']='multipart/form-data'
    
    // config.headers['Content-Type'] = 'application/json'
    // config.headers['Content-Type']='application/x-www-form-urlencoded';
  // Do something before request is sent
  // if (store.getters.token) {
  //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  //   config.headers['X-Token'] = getToken()
  // }

  // let user=JSON.parse(window.localStorage.getItem('access-user'));
  // if(JSON.parse(window.localStorage.getItem('access-user'))){
  //   token=user.token
  // }
  // config.headers.common['token']=getRefresh()


  // if (getRefresh()) {
  //   // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    
  //   config.headers['Authorization'] = 'Bearer ' + getRefresh
  //   config.headers['Cache-Control'] = 'no-cache'
  // }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => response,
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service