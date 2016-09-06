import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/WeatherStyle'

class Weather extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const {weather} = this.props
    if(weather){
      const {forecastday} = weather.simpleforecast
      console.log('forecastday:',forecastday);

    }
    return (
      <ScrollView style={styles.container}>
      { weather ?
        <View>
          <Text style={styles.paper}>Weather Container</Text>
          {/* <Text style={styles.paper}>{weather.forecastday[0].name}</Text> */}

        </View>
       :
        <Text style={styles.paper}>waiting result</Text>
    }
  </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.forecastweather){
  return {
    weather: state.forecastweather.result
  }
}
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
