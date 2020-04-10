import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

class StampPrice extends React.Component {

  render() {

    return (
      <ImageBackground style={styles.backgroundImage} source={require('../assets/background.jpg')} >
        <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.title}>Stamp Prices </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center',
  },
});

export default StampPrice;
