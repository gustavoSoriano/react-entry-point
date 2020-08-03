import { createStore } from 'redux'
import INITIAL_STATE from './modules/index'

const reducer = ( state = INITIAL_STATE, action ) =>  {
    switch(action.type)
    {
        case 'ADD_USER':
            return { ...state, usuario: action.usuario }
           
        case 'ADD_SYSTEM':
            return { ...state, system: action.system }

        default:
            return state
    }
}

const store = createStore(reducer)
export default store