import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: '#f4efdd',
  },
  paper: {
    backgroundColor: '#fff',
    color: 'darkgreen',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    borderRadius: 8,
  },
  pad: {
    paddingRight: 15,
  },
  temp: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 24,
    alignSelf: 'center',
  },
  date: {
    alignSelf: 'center',
    fontSize: 14,
    color: 'gray',
  },
  day: {
    fontSize: 17,
    color: 'forestgreen',
    fontWeight: 'bold',
  },
  desc: {
    paddingLeft: 25,
  }
})
