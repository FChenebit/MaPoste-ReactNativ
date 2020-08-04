import React from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import MapView, { Marker }  from 'react-native-maps';


class DetailPost extends React.Component {

    _buildMapRegion(curLatitude,curLongitude) {
        const newRegion = {
            latitude: curLatitude,
            longitude: curLongitude,
            latitudeDelta:0.0001,
            longitudeDelta:0.0001
        }
    }

    render() {

        const curPost = this.props.route.params.post

        return (
            <ImageBackground style={styles.backgroundImage} source={require('../assets/background.jpg')} >
              <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.containerView}> 
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.header_button} onPress={() => this.props.navigation.goBack(null)}>
                                <Image source={require('../assets/iconBack.png')} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                            <Text style={styles.title}>Detail</Text>
                        </View>
                    </View>
                    <Text style={styles.post}>
                        adresse : {curPost.adresse} {"\n"}
                        {"\n"}
                        caractéristique : {curPost.caracteristique} {"\n"}
                        {"\n"}
                        code postal : {curPost.codePostal} {"\n"}
                        {"\n"}
                        localité : {curPost.localite}
                    </Text>
                    <MapView
                        style={styles.map}
                        initialRegion={this._buildMapRegion(curPost.latitude,curPost.longitude)}
                    >
                      <Marker coordinate={{ latitude: parseFloat(curPost.latitude),
                         longitude: parseFloat(curPost.longitude) }} />
                    </MapView>
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    header_button: {
        paddingLeft: 10,
        flex: 1
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
        flex: 5
    },
    post: {
        fontWeight: 'bold',
        fontSize: 20,
        flexWrap: 'wrap',
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        color: '#FFFFFF',
        textAlign: 'left',
    },
    map: {
      flex: 1,
      marginBottom:20
    },
    safeAreaView: {
      flex:1,
      backgroundColor:'red'
    },
    containerView: {
      flex:1,
      backgroundColor:'green'
    }

});

export default DetailPost;
