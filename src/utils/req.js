import axios from 'axios'
import { Message } from 'element-ui'
import { getToken, getRefresh, removeToken, removeRefresh, removeExpirationDate } from '../auth'

const BASE_CCR = window.g.BASE_CCR
// const BASE_IPS = window.g.BASE_IPS
// const BASE_GIS = window.g.BASE_GIS

export const ZK = axios.create({
  // baseURL: 'https://cmdown.parkbobo.com' // api的base_url
  baseURL: BASE_CCR
  // request timeout
})

// request interceptor
ZK.interceptors.request.use(config => {
  if (getToken()) {
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    console.log('xiedai_token')
    config.headers['Authorization'] = 'Bearer ' + getToken()
    config.headers['Cache-Control'] = 'no-cache'
  }
  return config
}, error => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  Promise.reject(error)
})

// respone interceptor
ZK.interceptors.response.use(
  response => {
    // 成功请求
    var params = new URLSearchParams()
    params.append('method', response.config.method)
    params.append('successed', true)
    params.append('url', response.config.url)
    axios.put(`${window.g.BASE_CCR}/center/record/v1/add`, params)
    return Promise.resolve(response)
  },
  error => {
    // 失败请求
    var params = new URLSearchParams()
    params.append('method', error.config.method)
    params.append('successed', false)
    params.append('url', error.config.url)
    params.append('exception', JSON.stringify(error.response.data))
    axios.put(`${window.g.BASE_CCR}/center/record/v1/add`, params).then(res => {
      if (res.data.code === -1) {
        console.log(res.data.data)
      }
    }).catch(err => {
      console.log(err)
    })
    if (error.response && error.response.status === 401) {
      removeToken()
      removeRefresh()
      removeExpirationDate()
      clearTimeout(window.cmccr_timer)
      Message({
        message: error.response.data.error_description || '身份已过期,请重新登录',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    } else {
      Message({
        message: error.response.data.error_description || error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  })

// export const IPS = axios.create({
//   baseURL: BASE_IPS, // api的base_url
//   timeout: 5000 // request timeout
// })

// // request interceptor
// IPS.interceptors.request.use(config => {
//   if (getRefresh()) {
//     // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
//     config.headers['Authorization'] = 'Bearer ' + getRefresh()
//   }
//   return config
// }, error => {
//   Message({
//     message: error.message,
//     type: 'error',
//     duration: 5 * 1000
//   })
//   Promise.reject(error)
// })

// // respone interceptor
// IPS.interceptors.response.use(
//   response => {
//     // 成功请求
//     return Promise.resolve(response)
//   },
//   error => {
//     // 失败请求
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   })

// export const GIS = axios.create({
//   baseURL: BASE_GIS // api的base_url
// })

// // request interceptor
// GIS.interceptors.request.use(config => {
//   config.headers['Authorization'] = 'Basic Q21HaXNScGM6Q01naXNUISQmKCo='
//   return config
// }, error => {
//   Message({
//     message: error.message,
//     type: 'error',
//     duration: 5 * 1000
//   })
//   Promise.reject(error)
// })

// // respone interceptor
// GIS.interceptors.response.use(
//   response => {
//     // 成功请求
//     return Promise.resolve(response)
//   },
//   error => {
//     // 失败请求
//     Message({
//       message: error.message,
//       type: 'error',
//       duration: 5 * 1000
//     })
//     return Promise.reject(error)
//   })
