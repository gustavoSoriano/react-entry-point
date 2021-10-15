import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

api.interceptors.response.use( null, error => {
    console.log('ERROR api.interceptors.response ', error)
    return Promise.reject(error)
})

api.interceptors.request.use( config => {
    config.headers.common['Authorization'] = (() => sessionStorage.getItem("jwt"))()
    return config
}, error => {
    console.log('ERROR api.interceptors.request ', error)
    return Promise.reject(error)
})

export default api
