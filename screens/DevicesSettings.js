import React, { Component } from 'react';
import { StyleSheet, 
        View, 
        Image, 
        Text, 
        KeyboardAvoidingView, 
        Button, 
        TextInput, 
        StatusBar, 
        TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class DeviceSettingsScreen extends Component {
    render (){
        return (
            <View>
            <Text>
                You need to code super fast
            </Text>
        </View>
        );

    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    rowContainer: {
        width: 80,
        height: 60,
        resizeMode: 'contain',
        marginRight: 10
    }
});