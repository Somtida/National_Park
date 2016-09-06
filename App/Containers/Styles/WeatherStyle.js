import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  paper: {
    backgroundColor: '#fff',
    color: 'darkgreen',
    padding: 15,
    margin: 15,
  }
})
