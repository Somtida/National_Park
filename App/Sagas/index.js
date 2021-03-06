import { fork } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import { watchStartup } from './StartupSaga'
import { watchLoginAttempt } from './LoginSaga'
import getCityWeather from './GetCityWeatherSaga'
import DebugSettings from '../Config/DebugSettings'
import getPark from './GetParkSaga'
import getWeather from './GetWeatherSaga'

// Create our API at this level and feed it into
// the sagas that are expected to make API calls
// so there's only 1 copy app-wide!
// const api = API.create()
// const api = DebugSettings.useFixtures ? FixtureAPI : API.create()
const api = FixtureAPI
const apiWeather = API.create()


// start the daemons
export default function * root () {
  yield fork(watchStartup)
  // yield fork(watchLoginAttempt)
  // yield fork(getCityWeather(api).watcher)
  yield fork(getWeather(apiWeather).watcher)
  yield fork(getPark(api).watcher)
}
