import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: '#fff',
    borderBottomColor: '#6b6b47',
  },
  row: {
    flex: 1,
    backgroundColor: '#f4efdd',
    marginVertical: 1,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingTop: 15,
    marginBottom: -35,
    borderColor: '#fff'
  },
  thumbnailImage: {
    width: 120,
    height: 80,
  },
  boldLabel: {
    fontWeight: 'bold',
    fontSize: 14,
    top: -70,
    left: 140,
    color: '#000',
    marginBottom: Metrics.smallMargin
  },
  label: {
    top: -60,
    left: 140,
    color: '#000',
  },
  imagecontainer: {
    width: Metrics.screenWidth - 120,
  },
})
