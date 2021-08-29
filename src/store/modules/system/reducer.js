const INITIAL_STATE = {
    jwt: '',
    server: ''
}

export default ( state = INITIAL_STATE, action ) =>  {
    switch(action.type)
    {
        case '@system/ADD_SYSTEM':
            return { ...action.system }

        default:
            return state
    }
}
