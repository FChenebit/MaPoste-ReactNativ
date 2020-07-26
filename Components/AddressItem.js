import React from 'react'
import { StyleSheet, View, Text,Image,TouchableOpacity } from 'react-native'


class AddressItem extends React.Component {

  constructor(props) {
    super(props)
    this._goToDetail = this._goToDetail.bind(this)
  }


  _goToDetail(itemId) {
    this.props.navigation.navigate('Detail');//,{adressID:itemId})
  }

  render() {
    const itemData = this.props.addressItemData;

    console.log('item Data : ' +JSON.stringify(itemData))
    console.log('item Data code : ' + itemData.code)

    return (
      <TouchableOpacity style={styles.container}
          onPress={() => this._goToDetail(itemData.code)}>
        <Image
            style={styles.image}
            source={require('../assets/iconAddressDetail.png')}
        />
        <View style={styles.text_container}>
          <Text style={styles.description} numberOfLines={3}>{itemData.adresse}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    height:130
  },
  image: {
    width:120,
    height:120,
    margin:5,
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 2
  },
  text_container: {
    flex:1,
  },
  title: {
    flex:1,
    fontWeight: 'bold',
    marginTop:5,
    fontSize: 20,
  },
  description: {
    flex:3,
    fontSize: 15,
    flexWrap: 'wrap',
    margin:5
  }
});


export default AddressItem