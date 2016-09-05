import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import {
  View,
  MapView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native'

import Styles from './Styles/MapScreenStyle'
import { Images } from '../Themes'


class MapScreen extends React.Component {
  state = {
    isFirstLoad: true,
    mapRegion: undefined,
    mapRegionInput: undefined,
    annotations: [],
    image: require('../Images/nps_arrowhead_a.png'),
  };

  _showParkDetail = (id) => {
    console.log('id:',id);
    const data = this.props.parks[id]
    this.props.parkData(data)
    NavigationActions.parkDetail()
  }

  render() {
    // console.log('parks:', this.props.parks);
    // console.log('annotations:', this.state.annotations);
    return (
      <View>
        {/* <TouchableOpacity onPress={() => this._showParkDetail(this.state.annotations.id)}> */}
        <MapView
          style={Styles.map}
          onRegionChange={this._onRegionChange}
          onRegionChangeComplete={this._onRegionChangeComplete}
          region={this.state.mapRegion}
          annotations={this.state.annotations}
        />
      </View>
    );
  }

  _getAnnotations = (region) => {
    const parks = this.props.parks;
    return parks.map(park => {
      return {
        longitude: park.long,
        latitude: park.lat,
        title: park.name,
        id: park.id.toString(),
        // image: this.state.image,
        detailCalloutView: <TouchableOpacity onPress={() => this._showParkDetail(park.id)} ><Text>More...</Text></TouchableOpacity>
        // onFocus: () => this._showParkDetail(park.id),
      }
    })

  };

  _onRegionChange = (region) => {
    this.setState({
      mapRegionInput: region,
    });
  };

  _onRegionChangeComplete = (region) => {
    if (this.state.isFirstLoad) {
      this.setState({
        mapRegionInput: region,
        annotations: this._getAnnotations(region),
        isFirstLoad: false,
      });
    }
  };

  // _onRegionInputChanged = (region) => {
  //   this.setState({
  //     mapRegion: region,
  //     mapRegionInput: region,
  //     annotations: this._getAnnotations(region),
  //   });
  // };

  // constructor (props) {
  //   super(props)
  //
  // }
  //
  //
  // render () {
  //   return (
  //     <View style={Styles.container}>
  //     {/* <MapView
  //       style={Styles.mapContainer}
  //       showsUserLocation={true}
  //     /> */}
  //     </View>
  //   )
  // }
}



const mapStateToProps = (state) => {
  return {
    parks: state.park.parks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    parkData: (data) => dispatch(Actions.parkData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
