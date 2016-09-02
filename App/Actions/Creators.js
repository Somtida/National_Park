import Types from './Types'

const startup = () => ({ type: Types.STARTUP })

const requestTemperature = (city) => ({ type: Types.TEMPERATURE_REQUEST, city })
const receiveTemperature = (temperature) => ({ type: Types.TEMPERATURE_RECEIVE, temperature })
const receiveTemperatureFailure = () => ({ type: Types.TEMPERATURE_FAILURE })

const requestParks = () => ({ type: Types.PARKS_REQUEST })
const receiveParks = (parks) => ({ type: Types.PARKS_RECEIVE, parks })
const receiveParksFailure = () => ({ type: Types.PARKS_FAILURE })

const parkData = (data) => ({ type: Types.PARK_DATA, data })


/**
 Makes available all the action creators we've created.
 */
export default {
  startup,
  requestTemperature,
  receiveTemperature,
  receiveTemperatureFailure,
  requestParks,
  receiveParks,
  receiveParksFailure,
  parkData,
}
