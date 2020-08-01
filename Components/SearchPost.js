import React from 'react'
import { StyleSheet, View, Button,Text} from 'react-native'

import {getPostByPostalCode} from '../API/postAPI'

class SearchPost extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = ""
    this._log = this._log.bind(this)
    this._showPost = this._showPost.bind(this) // this bind let ther this inside showAddress to be defined
  }

  _showPost(data) {
    console.log(data);
  }

  _log(error) {
    console.log('inside view error param ' +error )
    Alert.alert('Erreur interne',error.message,[{text:'Ok'}])
  }

  _searchPost() {
    getPostByPostalCode('75013').then(this._showPost).catch(this._log)

    //this.props.navigation.navigate('List')
  }


  render() {
    return (
      <View style={styles.container} >
        <Text>PostSearch</Text>
        <Button title='Search' onPress={() => this._searchPost()}/>
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

export default SearchPost;
