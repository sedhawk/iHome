import React from 'react';
import {  Image, 
          Platform, 
          ScrollView, 
          StyleSheet,
          View, 
          Text, 
          Button,
          TouchableOpacity, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import Fontawesomeicons from 'react-native-vector-icons/FontAwesome';
import LoginScreen from '../components/Login/Login';
import HomeDefaultScreen from '../screens/HomeDefault';
import RoomsScreen from '../screens/Rooms';
import DevicesScreen from '../screens/Devices';
import RoomSettingsScreen from '../screens/RoomSettings';
import DeviceSettingsScreen from '../screens/DeviceSettings';
import OutsideSettingsScreen from '../screens/OutsideSettings';
import LivingRoomSettingsScreen from '../screens/LivingRoomSettings';
import GarageSettingsScreen from '../screens/GarageSettings';
import KitchenSettingsScreen from '../screens/KitchenSettings';


export class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            {/*<Text style={styles.getStartedText}>Get started by opening</Text>*/}
            
          <View style={styles.homeScreenFilename}>
              <Image
                style={styles.rowContainer} 
                source={require("../assets/images/house.png")} 
              />
             <Button
                onPress={() => this.props.navigation.navigate('Login')}
                title="LOGIN"
              />
                  
            </View>
            

            <Text style={styles.getStartedText}>
              Welcome to the about page. {"\n"} 
              Each device is sorted into rooms. {"\n"} 
              Users can add as many rooms with {"\n"} 
              many devices inside each room.
            </Text>
          </View>

        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}> Each network enabled device is separated into rooms for easy assortment.</Text>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          IHome {"\n"} {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  rowContainer: {
    width: 80,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10
  }
});

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
  HomeDefault: {
    screen: HomeDefaultScreen,
    navigationOptions: {
      headerTitle: 'IHome',
    },
  },
  Rooms: {
    screen: RoomsScreen,
    navigationOptions: {
      headerTitle: 'Room',
    },
  },
  Devices: {
    screen: DevicesScreen,
    navigationOptions: {
      headerTitle: 'Devices',
    },
  },
  RoomSettings: {
    screen: RoomSettingsScreen,
    navigationOptions: {
      headerTitle: 'Room Settings',
    },
  },
  DeviceSettings: {
    screen: DeviceSettingsScreen,
    navigationOptions: {
      headerTitle: 'Device Settings',
    },
  },
  OutsideSettings: {
    screen: OutsideSettingsScreen,
    navigationOptions: {
      headerTitle: 'Outside Settings',
    },
  },
  LivingRoomSettings: {
    screen: LivingRoomSettingsScreen,
    navigationOptions: {
      headerTitle: 'Living Room Settings',
    },
  },
  GarageSettings: {
    screen: GarageSettingsScreen,
    navigationOptions: {
      headerTitle: 'Garage Settings',
    },
  },
  KitchenSettings: {
    screen: KitchenSettingsScreen,
    navigationOptions: {
      headerTitle: 'Kitchen Settings',
    },
  },      
});

export default RootNavigator;