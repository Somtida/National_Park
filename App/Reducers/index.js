import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'
import WeatherReducer from './WeatherReducer'
import ParkReducer from './ParkReducer'
import ParkDataReducer from './ParkDataReducer'
// glue all the reducers together into 1 root reducer
export default combineReducers({
  // login: LoginReducer,
  // weather: WeatherReducer,
  park: ParkReducer,
  parkData: ParkDataReducer,
  forecastweather: WeatherReducer,

})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = ['login']
// OR put reducer keys that you DO want stored to persistence here (overrides blacklist)
// export const persistentStoreWhitelist = []
