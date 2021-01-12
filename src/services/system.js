import api from './api/index'
import {store} from '../store/index'

export const doLogin = async user => {
    const {system} = store.getState()
    let {data}     = await api.get( `/todos/1` )
    store.dispatch({ type:'@system/ADD_SYSTEM', system: {...system, jwt: btoa( data.userId )} })
    sessionStorage.setItem("jwt", btoa( data.userId ))
    return true
}

export const doLogout = () => {
    const {system} = store.getState()
    store.dispatch({ type:'@system/ADD_SYSTEM', system: {...system, jwt: null} })
    sessionStorage.removeItem("jwt")
}

