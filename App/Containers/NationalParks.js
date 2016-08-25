import React from 'react'
import { ScrollView,
  Image,
  Text,
  ListView,
  View,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Images } from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/NationalParksStyle'

class NationalParks extends React.Component {

  constructor (props) {
    super(props)

    const dataObjects = this.props.parks

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
    }



  }

  _showParkDetail = (id) => {
    const data = this.props.parks[id]
    this.props.parkData(data)
    NavigationActions.parkDetail()
  }

  _renderRow = (rowData) => {
    const image = rowData.image.replace('.jpg','')
    // console.log(`${image}: require('../Images/headers/${rowData.image}'),`);
    return(
      <View style={styles.row}>
        <TouchableOpacity onPress={() => this._showParkDetail(rowData.id)}>
          <View style={styles.imagecontainer}>
            <Image source={Images[image]} style={styles.thumbnailImage}/>
          </View>
          <View>
          <Text style={styles.boldLabel}>{rowData.name}</Text>
          <Text style={styles.label}>{rowData.state}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    parks: state.park.parks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    parkData: (data) => dispatch(Actions.parkData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NationalParks)
