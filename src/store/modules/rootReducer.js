import { combineReducers } from 'redux'

import system from './system/reducer'
import users from './users/reducer'

export default combineReducers({
    system, users
})
