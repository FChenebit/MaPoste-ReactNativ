import React from 'react'
import { View,Text,ImageBackground,TouchableOpacity,Image,StyleSheet,FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SegmentedControlTab from 'react-native-segmented-control-ui'

import PostItem from './PostItem.js'


class ListPost extends React.Component {
  _goBack() {
    this.props.navigation.goBack(null)
  }

  constructor(props) {
    super(props)
    this.state = {
      postList: undefined,
      selectedMapOrList:0
    }

    this._goToDetail = this._goToDetail.bind(this)

  }

  _handleIndexChange(index) {
    console.log('selecte map or list : ' + index)
    this.setState({
      selectedMapOrList: index
    });
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
      <SafeAreaView>
        <View>
        <View style={styles.header}>
            <TouchableOpacity style={styles.header_button} onPress={() => this.props.navigation.goBack(null)}> 
              <Image source={require('../assets/iconBack.png')} style={{ width:40, height:40}} />
            </TouchableOpacity>
            <Text style={styles.title}>List Post</Text>
          </View>
          <SegmentedControlTab
                    values={['List', 'Map']}
                    selectedIndex={this.state.selectedMapOrList}
                    onTabPress={this.handleIndexChange}
          />
          <FlatList data={this.state.postList} style={styles.list}
              keyExtractor={(item) => item.identifiantSite}
              renderItem={({item}) => <PostItem postItemData={item} goToDetail={this._goToDetail} />} 
          />
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
  }
});


export default ListPost;
