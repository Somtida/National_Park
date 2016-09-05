import {take, call, put} from 'redux-saga/effects'
import R from 'ramda'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import I18n from '../I18n/I18n.js'

export default (api) => {

  function * worker () {
    // make the call to the api
    const response = yield call(api.getParks)

    // success?
    console.log('got response:', response);
    if (response.ok) {
      const parksData = response.data
      yield put(Actions.receiveParks(parksData))

    } else {
      yield put(Actions.receiveParksFailure())
    }
  }


  function * watcher () {
    while (true) {
      console.log('doing watcher');
      yield take(Types.PARKS_REQUEST)

      yield call(worker)
    }
  }


  return {
    watcher,
    worker
  }
}
