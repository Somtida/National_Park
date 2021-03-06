import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: 'beige',
  },
  textTitle: {
    marginTop: 20,
    paddingLeft: 20,
    color: '#49612d',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtextTitle: {
    paddingLeft: 20,
    color: 'darkslategray',
    fontSize: 16,
    fontStyle: 'italic',
  },
  textDetail: {
    color: 'darkslategrey',
    fontWeight: '300',
    fontSize: 16,
    padding: 10,
  },
  datetextDetail: {
    color: 'darkslategrey',
    fontWeight: '300',
    fontSize: 16,
    padding: 10,
  },
  paper: {
    color: '#fff',
    padding: 10,
    margin: 20,
    backgroundColor: '#fff',
    shadowColor: 'grey',
  },
  weatherStyle: {
    alignSelf: 'center',
  },
})
