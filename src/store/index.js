import { createStore } from 'redux'

const INITIAL_STATE = {
    usuario: {
        name: '',
        email: ''
    }
}

const reducer = ( state = INITIAL_STATE, action ) =>  {
    switch(action.type)
    {
        case 'ADD_USER':
            return { ...state, usuario: action.usuario }
            
        default:
            return state
    }
}

const store = createStore(reducer)
export default store