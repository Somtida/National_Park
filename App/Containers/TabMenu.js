import React from 'react'
import {
  ScrollView,
  Text,
  TabBarIOS,
  View,
  TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
import NationalParks from './NationalParks'
// Styles
import styles from './Styles/TabMenuStyle'


class TabMenu extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'tabone',
    }
  }


  handleClick = (tab) => {
    this.setState({selectedTab: tab})
    console.log('click:', this.state.selectedTab);
    if(tab === 'nationalParks'){
      NavigationActions.nationalParks()
    }
  }


  render () {

    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="history"
          selected={this.state.selected === 'nationalParks'}
          onPress={() => this.handleClick('nationalParks')}>
          <View style={styles.container}>
            <NationalParks />
            <Text style={styles.tabText}>nationalPark</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="bookmarks"
          selected={this.state.selected === 'tabtwo'}
          onPress={() => this.handleClick('tabtwo')}>
          <View style={styles.container}>
            <Text style={styles.tabText}>bookmarks</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selected === 'tabthree'}
          onPress={() => this.handleClick('tabthree')}>
          <View style={styles.container}>
            <Text style={styles.tabText}>more</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>

    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabMenu)
