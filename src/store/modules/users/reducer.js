const INITIAL_STATE = []

export default ( state = INITIAL_STATE, action ) =>  {
    switch(action.type)
    {
        case '@users/ADD_USERS':
            return [...action.users]

        default:
            return state
    }
}
