import { take, put, select } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
// import R from 'ramda'

// process STARTUP actions
export function * watchStartup () {
  yield take(Types.STARTUP)
  const parks = yield select((state) => state.park.parks)
  // only fetch new temps when we don't have one yet
  if (!parks) {
    yield put(Actions.requestParks())
  }
}
