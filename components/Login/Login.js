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

const formstyles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 15,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    }
})

LoginForm=({navigation}) => (
        <View style={formstyles.container}>
            <StatusBar 
                barStyle="light-content"
            />
            <TextInput
                placeholder="username or email"
                placeholderTextColor="rgba(255,255,255,0.4)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={formstyles.input}
            />
            <TextInput
                placeholder="password"
                placeholderTextColor="rgba(255,255,255,0.4)"
                returnKeyType="go"
                secureTextEntry
                style={formstyles.input}
                ref={(input)=> this.passwordInput = input}
            />
            <TouchableOpacity style={formstyles.buttonContainer} onPress={()=>navigation.navigate('HomeDefault')} >
                <Text style={formstyles.buttonText}>
                    LOGIN
                </Text>
            </TouchableOpacity>
        </View>
);

export default class LoginScreen extends Component {
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
                    <LoginForm navigation={this.props.navigation}/>
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