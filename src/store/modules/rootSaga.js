import { all } from 'redux-saga/effects'

import system from './system/sagas'
import users from './users/sagas'

export default function* rootSaga() {
  return yield all([ system, users ])
}
