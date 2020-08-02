import React from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

class DetailPost extends React.Component {

    render() {

        const curPost = this.props.route.params.post

        return (
            <ImageBackground style={styles.backgroundImage} source={require('../assets/background.jpg')} >
                <SafeAreaView>
                    <View>
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.header_button} onPress={() => this.props.navigation.goBack(null)}>
                                <Image source={require('../assets/iconBack.png')} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                            <Text style={styles.title}>Detail</Text>
                        </View>
                    </View>
                    <Text style={styles.post}>
                        adresse : {curPoste.adresse} {"\n"}
                        {"\n"}
                        caractéristique : {curPoste.caracteristique} {"\n"}
                        {"\n"}
                         A CONTINUER
              numéro de voie : {this.state.numeroVoie} {"\n"}
                        {"\n"}
              libelle de la voie : {this.state.libelleVoie} {"\n"}
                        {"\n"}
              lieu dit: {this.state.lieuDit} {"\n"}
                        {"\n"}
              code postal: {this.state.codePostal} {"\n"}
                        {"\n"}
              cedex : {this.state.codeCedex} {"\n"}
                        {"\n"}
              commune : {this.state.commune} {"\n"}
                        {"\n"}
              bloc adresse: {this.state.blocAdresse} {"\n"}
                        {"\n"}
                    </Text>
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
        alignItems: 'center'
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
    }

});

export default DetailAddress;
