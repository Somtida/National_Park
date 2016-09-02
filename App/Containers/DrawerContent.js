import React, { Component } from 'react'
import { ScrollView, Image, Text } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressNationalParks = () => {
    this.toggleDrawer()
    NavigationActions.nationalParks()
  }
  handlePressMapScreen = () => {
    this.toggleDrawer()
    NavigationActions.mapScreen()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
      <DrawerButton iconName='pagelines' text='National Parks' onPress={this.handlePressNationalParks} />
      <DrawerButton text='Map' onPress={this.handlePressMapScreen} />
    {/* <DrawerButton text='Map' onPress={this.handlePressMapScreen} /> */}
      {/* <Icon name="ios-person" size={30} color="#4F8EF7" /> */}
    {/* </DrawerButton> */}
        {/* <Icon.Button
          name="pagelines"
          style={styles.iconButtonStyle}
          onPress={this.handlePressNationalParks} >
          <Text style={styles.textIcon}>National Parks</Text>
        </Icon.Button>
        <Icon.Button
          name="pagelines"
          style={styles.iconButtonStyle}
          onPress={this.handlePressMapScreen} >
          <Text style={styles.textIcon}>Map</Text>
        </Icon.Button> */}
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
