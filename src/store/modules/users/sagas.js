import { takeLatest, call, put, all } from 'redux-saga/effects'
import {getUsers} from '../../../services/users'

export function* getAllUsers() {
    try {
        const {data} = yield call( getUsers, null )
        yield put({ type: '@users/ADD_USERS', users: data || [] })
    }
    catch (err) {
        console.log(err)
    }
}

export default all([
  takeLatest('saga@users/GET_USERS', getAllUsers),
])
