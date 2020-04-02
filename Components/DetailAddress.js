import React from 'react'
import { StyleSheet, View, Text} from 'react-native'


class DetailAddress extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>DetailAddress</Text>
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
