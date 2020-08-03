import Axios from 'axios'
import store from '../../store/index'

export const doLogin = async user => {
    const {system} = store.getState()
    let {data}     = await Axios.get( `${system.server}/todos/1` )
    store.dispatch({ type:'ADD_SYSTEM', system: {...system, jwt: btoa( data.title )} })
    store.dispatch({ type:'ADD_USER', usuario: user })
    sessionStorage.setItem("jwt", btoa( data.title ))
    return true
}

export const doLogout = () => {
    const {system} = store.getState()
    store.dispatch({ type:'ADD_SYSTEM', system: {...system, jwt: null} })
    store.dispatch({ type:'ADD_USER', usuario: { name:"", email:"" } })
    sessionStorage.removeItem("jwt")
}

