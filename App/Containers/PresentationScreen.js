import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Actions from '../Actions/Creators'
import NationalParks from './NationalParks'
import TabMenu from './TabMenu'
// Styles
import styles from './Styles/PresentationScreenStyle'


class PresentationScreen extends React.Component {

  static propTypes = {
    componentExamples: PropTypes.func,
    usageExamples: PropTypes.func,
    apiTesting: PropTypes.func,
    theme: PropTypes.func,
    deviceInfo: PropTypes.func
  }

  _handleSubmit = () => {
    console.log('click');
    this.props.requestParks()
    this.props.nationalParks()
  }


  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.lakeclark} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          <Text style={styles.textStyle}>Welcome to National Park Service App</Text>
          </View>

          <RoundedButton onPress={this._handleSubmit}>
            National Parks
          </RoundedButton>
          {/* <RoundedButton onPress={this.props.mapviewExample}>
            Mapview Examples
          </RoundedButton> */}
          <RoundedButton onPress={this.props.mapScreen}>
            Map
          </RoundedButton>


        {/*
          <View style={styles.section} >
            <Text style={styles.sectionText} >
              Default screens for development, debugging, and alpha testing
              are available below.
            </Text>
          </View>

          <RoundedButton onPress={this.props.componentExamples}>
            Component Examples Screen
          </RoundedButton>

          <RoundedButton onPress={this.props.usageExamples}>
            Usage Examples Screen
          </RoundedButton>

          <RoundedButton onPress={this.props.apiTesting}>
            API Testing Screen
          </RoundedButton>

          <RoundedButton onPress={this.props.theme}>
            Theme Screen
          </RoundedButton>

          <RoundedButton onPress={this.props.deviceInfo}>
            Device Info Screen
          </RoundedButton>
          */}

          <View style={styles.centered}>
            <Text style={styles.subtitle}>Made with ❤️ by Somtida</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    componentExamples: NavigationActions.componentExamples,
    usageExamples: NavigationActions.usageExamples,
    apiTesting: NavigationActions.apiTesting,
    theme: NavigationActions.theme,
    deviceInfo: NavigationActions.deviceInfo,
    nationalParks: NavigationActions.nationalParks,
    tabMenu: NavigationActions.tabMenu,
    mapviewExample: NavigationActions.mapviewExample,
    mapScreen: NavigationActions.mapScreen,
    requestParks: () => dispatch(Actions.requestParks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
