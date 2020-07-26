import React from 'react'
import { StyleSheet, View, Text,Button} from 'react-native'

import {getAdresseDetail} from '../API/addressAPI'


class DetailAddress extends React.Component {

  constructor(props) {
    super(props)
    this._checkAddressError = this._checkAddressError.bind(this)
    this._showAddress = this._showAddress.bind(this)
  }


  _goBack() {
    this.props.navigation.goBack(null)
  }

  _showAddress(data) {
    console.log('view result 2 ' + JSON.stringify(data))
  }

  _getDetailAddress() {
    console.log('TFC')
    getAdresseDetail('TFC').then(this._showAddress).catch(this._log)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>DetailAddress</Text>
        <Button title='Back' onPress={() => this._goBack()}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailAddress;
