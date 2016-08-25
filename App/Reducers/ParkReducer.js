import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  parks: null,
  fetching: false,
})

// request temp
const request = (state, action) =>
  state.merge({
    fetching: true
  })

// receive temp
const receive = (state, action) =>
  state.merge({
    fetching: false,
    parks: action.parks
  })

// temp failure
const failure = (state, action) =>
  state.merge({
    fetching: false,
    parks: null
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.PARKS_REQUEST]: request,
  [Types.PARKS_RECEIVE]: receive,
  [Types.PARKS_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
