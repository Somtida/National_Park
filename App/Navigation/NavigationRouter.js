import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import Actions from '../Actions/Creators'
import { connect } from 'react-redux'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import MapviewExample from '../Containers/MapviewExample'
import NationalParks from '../Containers/NationalParks'
import ParkDetail from '../Containers/ParkDetail'
import TabMenu from '../Containers/TabMenu'
import MapScreen from '../Containers/MapScreen'
import Weather from '../Containers/Weather'
/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    console.log('name:',this.props.parkData.name);
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='presentationScreen' component={PresentationScreen} title='National Park Service' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='nationalParks' component={NationalParks} title='National Parks' />
            <Scene key='parkDetail' component={ParkDetail} title='Park Detail' />
            <Scene key='mapviewExample' component={MapviewExample} title='Mapview Example' />
            <Scene key='mapScreen' component={MapScreen} title='Map Screen' />
            <Scene key='weather' component={Weather} title='Weather Forecast' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    parkData: state.parkData
  }
}

export default connect(mapStateToProps)(NavigationRouter)
