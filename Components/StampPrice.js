import React from 'react'
import { StyleSheet, View, Text, ImageBackground, FlatList, TouchableOpacity,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import stampPriceData from '../assets/stampPriceData.js'
import StampItem from "./StampItem"

class StampPrice extends React.Component {

  render() {

    return (
      <ImageBackground style={styles.backgroundImage} source={require('../assets/background.jpg')} >
        <SafeAreaView>
          <View>
            <View style={styles.header}>
              <TouchableOpacity style={styles.header_button} onPress={() => this.props.navigation.toggleDrawer()}> 
                <Image source={require('../assets/iconHamburger.png')} style={{ width:40, height:40}} />
              </TouchableOpacity>
              <Text style={styles.title}>Stamp Prices</Text>
            </View>
            <FlatList data={stampPriceData} style={styles.list}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <StampItem stampItemData={item} />} />
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

export default StampPrice;
