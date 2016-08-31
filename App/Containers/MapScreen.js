import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  View,
  MapView,
} from 'react-native'

import Styles from './Styles/MapScreenStyle'



class MapScreen extends React.Component {
  state = {
    isFirstLoad: true,
    mapRegion: undefined,
    mapRegionInput: undefined,
    annotations: [],
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
      </View>
    );
  }

  _getAnnotations = (region) => {
    return [
      {
        longitude: -122,
        latitude: 37,
        title: 'You Are Here',
      },
      {
        longitude: -68.21,
        latitude: 44.35,
        title: 'NY',
      },
    ];
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
    // parks: state.park.parks;
  }
}

export default connect(mapStateToProps)(MapScreen)
