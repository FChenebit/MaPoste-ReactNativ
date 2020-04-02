import React from 'react'
import { StyleSheet, Button,View, Text} from 'react-native'


class CheckAddress extends React.Component {

  _showDetailAddress() {
    this.props.navigation.navigate("DetailAddress")
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>CheckAddress</Text>
        <Button title='Check' onPress={() => this._showDetailAddress()}/>
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

export default CheckAddress;
