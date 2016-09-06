import {take, call, put} from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

export default (api) => {
  function * worker (position) {
    console.log('in worker',position);
    console.log('api', api.getWeather)
    const response = yield call(api.getWeather, position.lat, position.lng)
    //
    console.log('response:',response)
    if (response.ok) {
      // console.log('response.data:',response.data);
      const result = response.data
      console.log('result in getWeatherSaga:',result);
      yield put(Actions.receiveTemperature({ result }))
    } else {
      yield put(Actions.receiveTemperatureFailure())
    }
  }

  function * watcher () {
    while (true) {
      const { position } = yield take(Types.TEMPERATURE_REQUEST)
      console.log('position:',position);
      yield call(worker, position)
    }
  }

  return {
    watcher,
    worker
  }
}
