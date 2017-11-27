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
//import { RadioButtons } from 'react-native-radio-buttons';
//import Fontawesomeicons from 'react-native-vector-icons/FontAwesome';
//import { CheckBox } from 'react-native-elements';
//import { CheckBox } from 'react-native-checkbox';


const formstyles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 15,
        color: 'black',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: '500',
    }
})

export default class VacuumConfigScreen extends Component {
    render (){
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image style={styles.cellContainer}
                        source={require("../assets/images/vacuum.png")} />
                    <Text style={styles.textTitle}>
                            Vacuum
                    </Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.textContainer}>
                            Start Time:
                        </Text>
                        <TextInput
                            placeholder="00:00"
                            placeholderTextColor= "grey"
                            returnKeyType="go"
                            style={formstyles.input}
                        />
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.textContainer}>
                            Duration Time:
                        </Text>
                        <TextInput
                            placeholder="01:00"
                            placeholderTextColor= "grey"
                            returnKeyType="go"
                            style={formstyles.input}
                        />
                </View>

                

                <View style={styles.rowContainer}>
                        <Button style={styles.buttonText}
                            onPress={() => this.props.navigation.goBack()}
                            title="Manaul Start" />
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
        //resizeMode: 'contain',
        paddingVertical: 5,
        //alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        resizeMode: 'contain',
    },
    buttonContainer: {
        width: 40,
        height: 40,
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
        width: 80,
        height: 80,
        //resizeMode: 'contain',
        backgroundColor: '#fff',
    },
    textTitle: {
        paddingVertical: 25,
        paddingLeft: 10,
        fontSize: 24,
    },
    textContainer: {
        fontSize: 14,
        paddingVertical: 12,
        paddingLeft: 6
    },

});