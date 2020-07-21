import React from 'react'
import { View,Text,ImageBackground,TouchableOpacity,Image,StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


class ListAddress extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      addressList: undefined
    }

  }

  componentDidMount() {
    console.log('this.props.route ' + JSON.stringify(this.props.route)) 
    console.log('this.props.state ' + JSON.stringify(this.props.state)) // must use route to get params, I don't know why
    this.setState({ addressList:this.props.route.params.addressList })
  }

  render() {

    console.log('address List : ' + this.state.addressList)

    return (
    <ImageBackground style={styles.backgroundImage} source={require('../assets/background.jpg')} >
      <SafeAreaView>
        <View>
        <View style={styles.header}>
            <TouchableOpacity style={styles.header_button} onPress={() => this.props.navigation.goBack(null)}> 
              <Image source={require('../assets/iconBack.png')} style={{ width:40, height:40}} />
            </TouchableOpacity>
            <Text style={styles.title}>List Address</Text>
          </View>
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

export default ListAddress;