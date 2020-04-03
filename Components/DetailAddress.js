import React from 'react'
import { StyleSheet, View, Text,Button} from 'react-native'


class DetailAddress extends React.Component {

  _goBack() {
    this.props.navigation.goBack(null)
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
