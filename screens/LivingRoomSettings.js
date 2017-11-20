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
        TouchableHighlight} from 'react-native';
import { StackNavigator } from 'react-navigation';

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
        fontWeight: '500'
    }
})

export default class OutsideSettingsScreen extends Component {
    render (){
        return (
        
            <View style={styles.container}>
                <View style={styles.rowContainer}>

                    <Text style={styles.textContainer}>
                        Room Name:
                    </Text>
                    <TextInput
                        placeholder="Current Name"
                        placeholderTextColor= "grey"
                        returnKeyType="go"
                        style={formstyles.input}
                    />
                </View>
                <View style={styles.rowContainer}>

                    <Image  style={styles.cellContainer}
                            source={require("../assets/images/house.png")} />
                    <Button style={styles.buttonText}
                            onPress={() => this.props.navigation.navigate('Rooms')}
                            title="  New Image" />
                </View>
                <View style={styles.rowContainer}>
                    <Button style={styles.buttonText}
                            onPress={() => this.props.navigation.goBack()}
                            title=" Save " />
                    <Button style={styles.buttonText}
                            onPress={() => this.props.navigation.goBack()}
                            title="  Cancel " />
                    
                </View>
                <View style={styles.rowContainer}>
                    <Button style={styles.buttonText}
                            onPress={() => this.props.navigation.goBack()}
                            title=" Delete " />
                    
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
        paddingLeft: 6,
        fontSize: 18
    }
});