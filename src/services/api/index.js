import axios from 'axios'
import { store } from '../../store/index'

const {system} = store.getState()

const api = axios.create({
  baseURL: system.server
})

api.interceptors.response.use( null, error => {
    console.log('ERROR api.interceptors.response ', error)
    return Promise.reject(error)
})

api.interceptors.request.use( config => {
    const {system} = store.getState()
    //config.headers.common['Authorization'] = system.jwt
    return config
}, error => {
    console.log('ERROR api.interceptors.request ', error)
    return Promise.reject(error)
})

export default api
