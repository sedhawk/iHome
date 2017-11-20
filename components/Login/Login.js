import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Log extends Component {
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../../assets/images/house.png')}
                    />
                    <Text style={styles.Title}>
                        A network device app made using React Native
                    </Text>

                </View>

                <View style={styles.formContainer}>
                    <loginForm />
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    logoContainer: {
        alignItems: 'center', 
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        color: '#FFF', 
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.8,
    }
});