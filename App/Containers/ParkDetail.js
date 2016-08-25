import React from 'react'
import {
  ScrollView,
  Text,
  ActivityIndicator,
  RefreshControl,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Images } from '../Themes'

// Styles
import styles from './Styles/ParkDetailStyle'

class ParkDetail extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      // refreshing: false
    }
  }

  render () {
    const { parkData } = this.props
    // console.log('this.props.parkData:',parkData);
    // console.log('image:',parkData.image.replace('.jpg',''));
    const image = parkData.image.replace('.jpg','')+'Head'
    console.log('image:',image);
    return (
      <ScrollView
        style={styles.container}
      >
        <Image source={Images[image]}/>
        <Text>{parkData.name}</Text>
        <Text>{parkData.data}</Text>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkDetail)
