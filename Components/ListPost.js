import React from 'react'
import { View,Text,ImageBackground,TouchableOpacity,Image,StyleSheet,FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SegmentedControlTab from 'react-native-segmented-control-ui' // https://github.com/gbhasha/react-native-segmented-control-ui
import MapView, { Marker }  from 'react-native-maps';

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

  _buildMapRegion = (postList) => {
    var maxLat = -90
    var minLat = 90
    var maxLon = -90
    var minLon = 90
    postList.forEach( post => {
      post.longitude = parseFloat(post.longitude)
      post.latitude = parseFloat(post.latitude)
      if(post.longitude < minLon) {
        minLon = post.longitude
      }
      if(post.longitude > maxLon) {
        maxLon = post.longitude
      }
      if(post.latitude < minLat) {
        minLat = post.latitude
      }
      if(post.latitude > maxLat) {
        maxLat = post.latitude
      }
    })

    var region = {
      latitude: minLat + (maxLat - minLat)/2,
      longitude: minLon + (maxLon - minLon)/2,
      latitudeDelta:(maxLat - minLat) * 1.05,
      longitudeDelta:(maxLon - minLon) * 1.05

    };

    return region;
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
              initialRegion={this._buildMapRegion(this.state.postList)}
            >
              {this.state.postList.map( (post) => {
                return (
                  <Marker coordinate={{ latitude: parseFloat(post.latitude),
                     longitude: parseFloat(post.longitude) }} />
                )
              })}
            </MapView>
            
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
