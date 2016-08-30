import {StyleSheet} from 'react-native'
import {Fonts, Metrics, Colors} from '../../Themes/'

const RootStyle = StyleSheet.create({
  applicationView: {
    flex: 2
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#6b6b47'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.base,
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }

})

export default RootStyle
