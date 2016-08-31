import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  View,
  MapView,
  Image,
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

  render() {
    // console.log('parks:', this.props.parks);
    return (
      <View>
        <MapView
          style={Styles.map}
          onRegionChange={this._onRegionChange}
          onRegionChangeComplete={this._onRegionChangeComplete}
          region={this.state.mapRegion}
          annotations={this.state.annotations}
        />
          {/* <MapView.Marker>
            <Image source={Images.pin} />
          </MapView.Marker>
        </MapView> */}
      </View>
    );
  }

  _getAnnotations = (region) => {
    console.log('parks:', this.props.parks);
    const parks = this.props.parks;
    return parks.map(park => {
      return {
        longitude: park.long,
        latitude: park.lat,
        title: park.name,
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

export default connect(mapStateToProps)(MapScreen)
