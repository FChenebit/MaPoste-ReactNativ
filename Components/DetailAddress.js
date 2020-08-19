import React from 'react'
import { StyleSheet, View, Text,ImageBackground,TouchableOpacity,Image,Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import {getAdressDetail} from '../API/addressAPI'


class DetailAddress extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      destinataire:'',
      pointRemise:'',
      numeroVoie:'',
      libelleVoie:'',
      lieuDit:'',
      codePostal:'',
      codeCedex:'',
      commune:'',
      blocAdresse:''
    }
    this._getDetailAddress()
  }


  _goBack = () => {
    this.props.navigation.goBack(null)
  }

  _showAddress = (data) => {
    console.log('view result in detail' + JSON.stringify(data))
    var newState = {
      destinataire:'',
      pointRemise:'',
      numeroVoie:'',
      libelleVoie:'',
      lieuDit:'',
      codePostal:'',
      codeCedex:'',
      commune:'',
      blocAdresse:''
    }
    if(data.destinataire) {
      newState.destinataire = data.destinataire
    }
    if(data.pointRemise) {
      newState.pointRemise = data.pointRemise
    }
    if(data.numeroVoie) {
      newState.numeroVoie = data.numeroVoie
    }
    if(data.libelleVoie) {
      newState.libelleVoie = data.libelleVoie
    }
    if(data.lieuDit) {
      newState.lieuDit = data.lieuDit
    }
    if(data.codePostal) {
      newState.codePostal = data.codePostal
    }
    if(data.codeCedex) {
      newState.codeCedex = data.codeCedex
    }
    if(data.commune) {
      newState.commune = data.commune
    }
    if(data.blocAdresse) {
      newState.blocAdresse = data.blocAdresse.join(' ')
    }
    this.setState(newState)

  }

  _getDetailAddress = () => {
    console.log('_getDetailAddress ' + this.props.route.params.adressID)
    getAdressDetail(this.props.route.params.adressID).then(this._showAddress).catch((error) =>  Alert.alert('Erreur interne',JSON.stringify(error),[{text:'Ok'}]))
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
            <Text style={styles.title}>Detail</Text>
          </View>
        </View>
        <Text style={styles.address}>
          destinataire : {this.state.destinataire} {"\n"}
          {"\n"}
          point remise : {this.state.pointRemise} {"\n"}
          {"\n"}
          numéro de voie : {this.state.numeroVoie} {"\n"}
          {"\n"}
          libelle de la voie : {this.state.libelleVoie} {"\n"}
          {"\n"}
          lieu dit: {this.state.lieuDit} {"\n"}
          {"\n"}
          code postal: {this.state.codePostal} {"\n"}
          {"\n"}
          cedex : {this.state.codeCedex} {"\n"}
          {"\n"}
          commune : {this.state.commune} {"\n"}
          {"\n"}
          bloc adresse: {this.state.blocAdresse} {"\n"}
          {"\n"}
        </Text>
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
  address: {
    fontWeight: 'bold',
    fontSize: 20,
    flexWrap: 'wrap',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    color: '#FFFFFF',
    textAlign: 'left',
  }

});

export default DetailAddress;
