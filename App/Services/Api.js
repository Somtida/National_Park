// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import Reactotron from 'reactotron'

const create = (baseURL = 'http://api.wunderground.com/api/ae213f9eff9d83c2/conditions/forecast/alert') => {

  const api = apisauce.create({ baseURL })

  const addMonitor = api.addMonitor((response) => {
    Reactotron.apiLog(response)
  })

  const getWeather = (lat,lng) => {
    console.log('in api',lat,lng);
    return api.get(`/q/${lat},${lng}.json`)
  }


  return {
    addMonitor,
    getWeather,
  }
}

// let's return back our create method as the default.
export default {
  create
}
