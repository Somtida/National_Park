import React from 'react'
import {
  ScrollView,
  Text,
  ActivityIndicator,
  RefreshControl,
  Image,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import styles from './Styles/ParkDetailStyle'

class ParkDetail extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      // refreshing: false
    }
  }

  _showWeater = (lat,lng) => {
    console.log(lat,lng);
    const position = {
      lat: lat,
      lng: lng,
    }
    const { requestTemperature } = this.props
    requestTemperature(position)
  }

  render () {
    const { parkData } = this.props
    // console.log('this.props.parkData:',parkData);
    // console.log('image:',parkData.image.replace('.jpg',''));
    const image = parkData.image.replace('.jpg','')+'Head'
    // console.log('image:',image);
    return (
      <ScrollView
        style={styles.container}
      >
        <Image source={Images[image]} style={styles.imageHeader}/>
        <Text style={styles.textTitle}>{parkData.name}</Text>
        <Text style={styles.subtextTitle}>{parkData.state}</Text>
        <View style={styles.paper}>
          <Text style={styles.textDetail}>{parkData.data}</Text>
          <Text style={styles.datetextDetail}>Created Date: {parkData.createDate}</Text>
        </View>
        <Icon.Button name="pagelines" backgroundColor="#49612d" onPress={() => this._showWeater(parkData.lat,parkData.long)} style={styles.weatherStyle}>
          Weather forecast
        </Icon.Button>


      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    parkData: state.parkData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestTemperature: (lat,lng) => dispatch(Actions.requestTemperature(lat,lng))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkDetail)
