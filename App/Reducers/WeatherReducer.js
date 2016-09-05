import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  result: {},
  fetching: null,
  error: null,
})

// request temp
const request = (state, action) =>
  state.merge({
    fetching: true,
    result: action.result,
  })

// receive temp
const receive = (state, action) =>
  state.merge({
    fetching: false,
    error: null,
    result: action.result
  })

// temp failure
const failure = (state, action) =>
  state.merge({
    fetching: false,
    error: true,
    result: null
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.TEMPERATURE_REQUEST]: request,
  [Types.TEMPERATURE_RECEIVE]: receive,
  [Types.TEMPERATURE_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
