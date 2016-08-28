import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  icon: {
    color: 'white',
  },
  tab: {
    top: 50,
  },
  tabContent: {
    // flex: 2,
    top: 100,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
    fontSize: 45,
  },
})
