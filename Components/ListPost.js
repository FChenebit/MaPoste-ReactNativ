import React from 'react'
import { View,Text,ImageBackground,TouchableOpacity,Image,StyleSheet,FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SegmentedControlTab from 'react-native-segmented-control-ui' // https://github.com/gbhasha/react-native-segmented-control-ui
import MapView from 'react-native-maps';

import PostItem from './PostItem.js'


class ListPost extends React.Component {
  _goBack() {
    this.props.navigation.goBack(null)
  }

  constructor(props) {
    super(props)
    this.state = {
      postList: undefined,
      selectedMapOrList:0,
    }

    this._goToDetail = this._goToDetail.bind(this)
    //this._handleIndexChange = this._handleIndexChange.bind(this)
    // not necessary with the form choosen for handle change index.
    // to look deeper

  }

  _handleIndexChange = (index) => {
    console.log('selecte map or list : ' + index)
    this.setState({
      selectedMapOrList: index
    });
  }

  _buildMapRegionAndMark = (postList) => {
    var maxLat = -90
    var minLat = 90
    var maxLon = -90
    var minLon = 90
    
  }

  _goToDetail(post) {
    console.log('go to detail for ' + JSON.stringify(post))
    this.props.navigation.navigate('Detail',{post:post})
  }

  componentDidMount() {
    this.setState({ postList:this.props.route.params.postList })
  }


  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={require('../assets/background.jpg')} >
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.containerView}> 
        <View style={styles.header}>
            <TouchableOpacity style={styles.header_button} onPress={() => this.props.navigation.goBack(null)}> 
              <Image source={require('../assets/iconBack.png')} style={{ width:40, height:40}} />
            </TouchableOpacity>
            <Text style={styles.title}>List Post</Text>
        </View>
        <SegmentedControlTab
                    values={['List', 'Map']}
                    selectedIndex={this.state.selectedMapOrList}
                    onTabPress={this._handleIndexChange}
        />
        {this.state.selectedMapOrList===0
          ? <FlatList data={this.state.postList}
              keyExtractor={(item) => item.identifiantSite}
              renderItem={({item}) => <PostItem postItemData={item} goToDetail={this._goToDetail} />} 
            />
          : <MapView
              style={styles.map}
              initialRegion={this.state.region}
            />
        }
        </View>
      </SafeAreaView>
    </ImageBackground>
     )
  }

}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  header: {
    flexDirection:'row',
    alignItems:'center'
  },
  header_button: {
    paddingLeft:10,
    flex:1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    flexWrap: 'wrap',
    marginLeft: 0,
    marginTop: 10,
    marginBottom: 10,
    color: '#FFFFFF',
    textAlign: 'center',
    flex:5
  },
  map: {
    flex: 1,
  },
  safeAreaView: {
    flex:1,
  },
  containerView: {
    flex:1,
  }
});


export default ListPost;
