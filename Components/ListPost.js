import React from 'react'
import { StyleSheet, View, Text} from 'react-native'


class ListPost extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>ListPost</Text>
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

export default ListPost;
