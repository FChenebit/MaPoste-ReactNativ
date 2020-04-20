import React from 'react'
import { StyleSheet, View, Text,Image } from 'react-native'


class StampItem extends React.Component {


  render() {
    const stampItemData = this.props.stampItemData;

    return (
      <View style={styles.container}>
        <Image
            style={styles.image}
            source={stampItemData.imageSrc}
        />
        <View style={styles.text_container}>
          <Text style={styles.title}>{stampItemData.name}</Text>
          <Text style={styles.description} numberOfLines={3}>{stampItemData.description}</Text>
        </View>
      </View>
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
    borderColor: 'black',
    borderWidth: 2
  },
  text_container: {
    backgroundColor:'black',
    flex:1,
  },
  title: {
    flex:1,
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor:'green'
  },
  description: {
    flex:3,
    fontSize: 15,
    backgroundColor:'yellow',
    flexWrap: 'wrap',
    margin:5
  }
});


export default StampItem