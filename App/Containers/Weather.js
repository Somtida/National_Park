import React from 'react'
import { ScrollView,
  Text,
  View,
  Image,
  ListView,
} from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
// Styles
import styles from './Styles/WeatherStyle'

class Weather extends React.Component {

  constructor (props) {
    super(props)
    if(this.props.weather){
      console.log('this.props.weather:',this.props.weather);
    //   const dataObjects = this.props.weather.simpleforecast.forecastday
    //
    //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //
    //   this.state = {
    //     dataSource: ds.cloneWithRows(dataObjects),
    //   }
    }
  }

  _renderRow = (rowData) => {
    console.log('rowData:',rowData);
    // const image = rowData.
    // // console.log(`${image}: require('../Images/headers/${rowData.image}'),`);
    // return(
    //   <View style={styles.row}>
    //     <View style={styles.imagecontainer}>
    //       <Image source={Images[image]} style={styles.thumbnailImage}/>
    //     </View>
    //     <View>
    //     <Text style={styles.boldLabel}>{rowData.name}</Text>
    //     <Text style={styles.label}>{rowData.state}</Text>
    //     </View>
    //   </View>
    // )
  }

  render () {
    const {weather} = this.props
    // if(weather){
    //   const {forecastday} = weather.simpleforecast
    //   console.log('forecastday:',forecastday);
    //   const dataObjects = forecastday
    //
      // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      // this.setState({dataSource: ds.cloneWithRows(forecastday)})
    //
    // }
    // console.log('this.state:',this.state);
    return (
      <ScrollView style={styles.container}>
      { weather ?
        <View>
        <View style={styles.paper}>
          <Text style={styles.temp}>
            <Icon name="arrow-circle-up" size={20} color="#900" style={styles.pad}/>
            {this.props.weather.simpleforecast.forecastday[0].high.fahrenheit}
            <Icon name="arrow-circle-down" size={20} color="#900" style={styles.pad}/>
            {this.props.weather.simpleforecast.forecastday[0].low.fahrenheit}
          </Text>
          <Text style={styles.date}>
            {this.props.weather.simpleforecast.forecastday[0].date.pretty}
          </Text>
          <Text style={styles.day}>
            {this.props.weather.txt_forecast.forecastday[0].title}
          </Text>
          <Text style={styles.desc}>
            {this.props.weather.txt_forecast.forecastday[0].fcttext}
          </Text>
          <Text style={styles.day}>
            {this.props.weather.txt_forecast.forecastday[1].title}
          </Text>
          <Text style={styles.desc}>
            {this.props.weather.txt_forecast.forecastday[1].fcttext}
          </Text>
        </View>

        <View style={styles.paper}>
          <Text style={styles.temp}>
            <Icon name="arrow-circle-up" size={20} color="#900" style={styles.pad}/>
            {this.props.weather.simpleforecast.forecastday[1].high.fahrenheit}
            <Icon name="arrow-circle-down" size={20} color="#900" style={styles.pad}/>
            {this.props.weather.simpleforecast.forecastday[1].low.fahrenheit}
          </Text>
          <Text style={styles.date}>
            {this.props.weather.simpleforecast.forecastday[1].date.pretty}
          </Text>
          <Text style={styles.day}>
            {this.props.weather.txt_forecast.forecastday[2].title}
          </Text>

          <Text style={styles.desc}>
            {this.props.weather.txt_forecast.forecastday[2].fcttext}
          </Text>
          <Text style={styles.day}>
            {this.props.weather.txt_forecast.forecastday[3].title}
          </Text>
          <Text style={styles.desc}>
            {this.props.weather.txt_forecast.forecastday[3].fcttext}
          </Text>
        </View>

        <View style={styles.paper}>
          <Text style={styles.temp}>
            <Icon name="arrow-circle-up" size={20} color="#900" style={styles.pad}/>
            {this.props.weather.simpleforecast.forecastday[2].high.fahrenheit}
            <Icon name="arrow-circle-down" size={20} color="#900" style={styles.pad}/>
            {this.props.weather.simpleforecast.forecastday[2].low.fahrenheit}
          </Text>
          <Text style={styles.date}>
            {this.props.weather.simpleforecast.forecastday[2].date.pretty}
          </Text>
          <Text style={styles.day}>
            {this.props.weather.txt_forecast.forecastday[4].title}
          </Text>
          <Text style={styles.desc}>
            {this.props.weather.txt_forecast.forecastday[4].fcttext}
          </Text>
          <Text style={styles.day}>
            {this.props.weather.txt_forecast.forecastday[5].title}
          </Text>
          <Text style={styles.desc}>
            {this.props.weather.txt_forecast.forecastday[5].fcttext}
          </Text>
        </View>

        <View style={styles.paper}>
          <Text style={styles.temp}>
            <Icon name="arrow-circle-up" size={20} color="#900" style={styles.pad}/>
            {this.props.weather.simpleforecast.forecastday[3].high.fahrenheit}
            <Icon name="arrow-circle-down" size={20} color="#900" style={styles.pad}/>
            {this.props.weather.simpleforecast.forecastday[3].low.fahrenheit}
          </Text>
          <Text style={styles.date}>
            {this.props.weather.simpleforecast.forecastday[3].date.pretty}
          </Text>
          <Text style={styles.day}>
            {this.props.weather.txt_forecast.forecastday[6].title}
          </Text>
          <Text style={styles.desc}>
            {this.props.weather.txt_forecast.forecastday[6].fcttext}
          </Text>
          <Text style={styles.day}>
            {this.props.weather.txt_forecast.forecastday[7].title}
          </Text>
          <Text style={styles.desc}>
            {this.props.weather.txt_forecast.forecastday[7].fcttext}
          </Text>
        </View>

          {/* <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
          /> */}

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
