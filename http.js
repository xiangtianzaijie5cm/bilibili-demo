import axios from 'axios'
import router from 'vue-router'
import vue from 'vue'

const http = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api'
})

/**
 * 请求拦截器
 */
http.interceptors.request.use((config) => {
  if (localStorage.getItem('id') && localStorage.getItem('token')) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  }
  // config.headers.secFetchDest = document
  // config.headers.secFetchMode = 'navigate'
  return config
}, (error) => {
  return Promise.reject(error)
})


/**
 * 响应拦截器
 */
http.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.response.status === 401 || error.response.status === 402) {
    router.push('/login')
    vue.prototype.$msg.fail(error.response.msg)
  }
  return Promise.reject(error)
})

export default http
