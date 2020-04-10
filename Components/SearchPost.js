import React from 'react'
import { StyleSheet, View, Button,Text} from 'react-native'


class SearchPost extends React.Component {

  componentDidMount() {
    console.log('SearchPost DID MOUNT');
  }

  componentWillUnmount() {
    console.log('SearchPost WILL UNMOUNT');
  }

  _searchPost() {
    this.props.navigation.navigate('List')
  }

  render() {
    return (
      <View style={styles.container} >
        <Text>PostSearch</Text>
        <Button title='Search' onPress={() => this._searchPost()}/>
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

export default SearchPost;
