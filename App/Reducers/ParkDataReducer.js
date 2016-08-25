import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  id: null,
  name: null,
  createDate: null,
  lat: null,
  long: null,
  distance: null,
  image: null,
  state: null,
  data: null,
})


const data = (state, action) =>
  state.merge({
    id: action.data.id,
    name: action.data.name,
    createDate: action.data.createDate,
    lat: action.data.lat,
    long: action.data.long,
    distance: action.data.distance,
    image: action.data.image,
    state: action.data.state,
    data: action.data.data,
  })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.PARK_DATA]: data,

}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
