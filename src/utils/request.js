import axios from 'axios'
import {ElMessage} from 'element-plus'
import store from './store'
import { getToken } from '@/utils/auth'
const defaultSettings = require('@/setting')

axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_MOCK, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1800000 // request timeout
})
service.all = axios.all;

service.interceptors.request.use(
  config => {
    if(store.getters.token){
      config.headers['X-Access-Token'] = getToken()
      config.headers['viewHost'] = defaultSettings.viewHost
    }
    config.headers['x-requested-with'] = 'XMLHttpRequest'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    const res = response.data
    
    if(res.code !== 200){
      ElMessage({
        showClose: true,
        message: error.message || 'Error',
        type: 'error',
        duration : 2 * 1000
      })
      if (res.code === 403) {
        store.dispatch('user/resetToken').then(() => {
          location.reload();
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    ElMessage({
      showClose: true,
      message: error.message,
      type: 'error',
      duration : 2 * 1000
    })
    return Promise.reject(error)
  }
)

export default service