import React from "react"
import {Provider} from 'react-redux'
import Routes from "./routes/index"
import store from './store'

const App = () => {
    const {system} = store.getState()
    store.dispatch({ type:'ADD_SYSTEM', system: {...system, jwt: sessionStorage.getItem("jwt")} })
    
    return (
        <Provider store={store} >
            <Routes />
        </Provider>
    )
}

export default App
