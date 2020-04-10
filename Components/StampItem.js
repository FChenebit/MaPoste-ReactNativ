import React from 'react'
import { StyleSheet, View, Text,Image } from 'react-native'


class StampItem extends React.Component {


  render() {
    const stampItemData = this.props.stampItemData;
    //const stampImagePath = '../assets/stampsImages/'+stampItemData.imageName;

    //console.log('stamp image path : ' + stampImagePath)

    return (
      <View style={styles.container}>
        <Image
            style={styles.image}
            source={stampItemData.imageSrc}
        />
        <Text>{stampItemData.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#FFFFFF'
  },
  image: {
    width:120,
    height:120,
    margin:5
  }
});


export default StampItem