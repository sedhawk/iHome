import React, { Component } from 'react';
import { StyleSheet, 
        View, 
        Image, 
        Text, 
        KeyboardAvoidingView, 
        Button, 
        TextInput, 
        StatusBar, 
        TouchableOpacity,
        TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class LivingRoomDevicesScreen extends Component {
    render (){
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image style={styles.cellContainer}
                        source={require("../assets/images/light_bulb.png")} />
                    <Button
                            onPress={() => this.props.navigation.navigate('LightSettings')}
                            title="        Lights            " />
                    <TouchableHighlight style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('LightConfig')} >
                        <Image style={styles.buttonContainer}
                            source={require("../assets/images/gear.png")} />
                    </TouchableHighlight>
                </View>
                <View style={styles.rowContainer}>
                    <Image style={styles.cellContainer}
                        source={require("../assets/images/thermostat.png")} />
                    <Button
                            onPress={() => this.props.navigation.navigate('Devices')}
                            title="  Outside Temp     " />
                    <TouchableHighlight style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('DeviceSettings')} >
                        <Image style={styles.buttonContainer}
                            source={require("../assets/images/gear.png")} />
                    </TouchableHighlight>
                </View>
                <View style={styles.rowContainer}>
                    <TouchableHighlight style={styles.buttonContainer} onPress={()=>this.props.navigation.navigate('DeviceSettings')} >
                        <Image style={styles.buttonContainer}
                            source={require("../assets/images/plus_sign.png")} />
                    </TouchableHighlight>
                    <Text style={styles.textContainer}>
                        Add Devices
                    </Text>
                </View> 
            </View>   
        );

    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      //justifyContent: 'space-around',
      justifyContent: 'center',
    },
    rowContainer: {
        //flex: 1,
        flexDirection: 'row',
        //height: 20,
        resizeMode: 'contain',
        paddingVertical: 5,
        //alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: 25,
        height: 25,
        backgroundColor: '#fff',
        paddingVertical: 4
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'grey'
    },
    cellContainer: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        backgroundColor: '#fff',
    },
    textContainer: {
        paddingVertical: 8,
        paddingLeft: 6
    }
});