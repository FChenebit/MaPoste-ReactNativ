import React from 'react'
import { StyleSheet, Button,View, Text,ImageBackground,FlatList,TouchableOpacity,Image,Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import {getAddresses} from '../API/addressAPI'


class CheckAddress extends React.Component {

  constructor(props) {
    super(props)
    this._checkAddressError = this._checkAddressError.bind(this)
    this._showAddress = this._showAddress.bind(this) // this bind let ther this inside showAddress to be defined
  }

  _checkAddressError(data) {
    let check = true
    if(data) {
      if(data.response) {
        if(data.response.error){
          check = false
          Alert.alert('Erreur addresse',data.reponse.error,[{text:'Ok'}])          
        } 
      }
    }
    return check
  }

  _log(error) {
    console.log('inside view error')
    console.log('param :' + error)
    Alert.alert('Erreur interne',error.message,[{text:'Ok'}])
  }


  _showAddress(data) {
    console.log('view result 2 ' + JSON.stringify(data))
    if(this._checkAddressError(data)) {
      console.log('go to list address')
    }
  }
 
  _searchAddress() {
    console.log('TFC')
    getAddresses('TFC').then(this._showAddress).catch(this._log)
  }


  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={require('../assets/background.jpg')} >
      <SafeAreaView>
        <View>
          <View style={styles.header}>
            <TouchableOpacity style={styles.header_button} onPress={() => this.props.navigation.toggleDrawer()}> 
              <Image source={require('../assets/iconHamburger.png')} style={{ width:40, height:40}} />
            </TouchableOpacity>
            <Text style={styles.title}>Check Address</Text>
          </View>
          <Button title='Check' onPress={() => this._searchAddress()}/>
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

export default CheckAddress;
