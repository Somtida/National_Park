import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Images } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  }
})
