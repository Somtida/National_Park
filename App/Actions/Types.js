// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`

  STARTUP

  TEMPERATURE_REQUEST
  TEMPERATURE_RECEIVE
  TEMPERATURE_FAILURE

  PARKS_REQUEST
  PARKS_RECEIVE
  PARKS_FAILURE

  PARK_DATA
`)
