import React, { useEffect } from "react"
import {Provider} from 'react-redux'
import Routes from "./routes/index"
import {store} from './store'

const App = () => {
    useEffect( () => {
        const {system} = store.getState()
        store.dispatch({ type:'@system/ADD_SYSTEM', system: {...system, jwt: sessionStorage.getItem("jwt")} })
        store.dispatch({ type:'saga@users/GET_USERS' })
    }, [])

    return (
        <Provider store={store} >
            <Routes />
        </Provider>
    )
}

export default App
