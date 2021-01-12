const INITIAL_STATE = {
    jwt: '',
    server: 'https://jsonplaceholder.typicode.com'
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
