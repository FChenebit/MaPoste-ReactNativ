import React from 'react'
import { StyleSheet, View, Button,Text,ImageBackground,TouchableOpacity,Image,Alert,TextInput} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import Geolocation from '@react-native-community/geolocation';


import {getPostByPostalCode,getPostByLocation} from '../API/postAPI'

class SearchPost extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = ""
  }
  

  _getPosition = () => {
    console.log('view did appear')
    Geolocation.getCurrentPosition((position) => { 
      console.log('position found ' + JSON.stringify(position));
      getPostByLocation(position.coords.longitude,
        position.coords.latitude).then(this._showPost).catch(this._log)
      
    },(error) => {
      console.log('error geoloc : ' + JSON.stringify(error));
      Alert.alert('Erreur geolocation ',error.message,[{text:'Ok'}]) 
    },
    { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 })
  }

  _checkPostError = (data) => {
    let check = true
    if(data) {
      if(data.code) {
        check = false
        Alert.alert('Erreur recherche poste',data.message,[{text:'Ok'}])          
      } 
    }
    return check
  }


  _showPost = (data) => {
    console.log(data);
    if(this._checkPostError(data)) {
      this.props.navigation.navigate('List',{postList:data})
    }
  }

  _log = (error) => {
    console.log('inside view error param ' +error )
    Alert.alert('Erreur interne',error.message,[{text:'Ok'}])
  }

  _searchTextInputChanged = (text) => {
    this.searchedText = text
  }

  _searchPostByPostalCode = () => {
    if( (this.searchedText.length === 5) && !isNaN(this.searchedText) ) {
      getPostByPostalCode(this.searchedText).then(this._showPost).catch(this._log)
    } else {
      Alert.alert('Erreur format','Le code postal doit avoir 5 chiffres',[{text:'Ok'}])
    }
  }

  _searchPostByLocation = () => {
    this._getPosition(
      
    )

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
            <Text style={styles.title}>Search Post</Text>
          </View>
          <TextInput
            multiline={true}
            autoCorrect={false}           
            style={styles.textinput}
            placeholder='Code Postal à rechercher'
            onChangeText={(text) => this._searchTextInputChanged(text)}            
          />
        <Button title='Search by Postal Code' onPress={() => this._searchPostByPostalCode()}/>
        <Button title='Search by Current Location' onPress={() => this._searchPostByLocation()}/>
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
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 150,
    marginBottom:30,
    borderColor: '#000000',
    backgroundColor:'#FFFFFF',
    borderWidth: 1,
    paddingLeft: 5
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

export default SearchPost;
