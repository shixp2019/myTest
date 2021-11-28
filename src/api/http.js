const axios = require('axios')
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = 'localhost:8080'
// } else {
//   axios.defaults.baseURL = 'localhost:8080'
// }
export const httpGet = axios.create({
  timeout: 5000
})
httpGet.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
