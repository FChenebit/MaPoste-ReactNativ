import React from 'react'
import { StyleSheet, View, Text, ImageBackground,FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import stampPriceData from '../assets/stampPriceData.js'
import StampItem from "./StampItem"


class StampPrice extends React.Component {

  render() {

    return (
      <ImageBackground style={styles.backgroundImage} source={require('../assets/background.jpg')} >
        <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.title}>Stamp Prices</Text>
            <FlatList data={stampPriceData} style={styles.list}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <StampItem stampItemData={item} />}  />
          </View>
        </SafeAreaView>
      </ImageBackground>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  backgroundImage: {
    flex: 1,    
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center',
  },
  list: {
  }
});

export default StampPrice;
