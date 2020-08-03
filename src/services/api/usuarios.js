import Axios from 'axios'

import store from '../../store/index'

export const getUsers = () => {
    console.log( store.dispatch, store.getState() )
    return null
}
