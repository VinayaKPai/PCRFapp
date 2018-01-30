/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
 import { StackNavigator } from 'react-navigation';
 import {styles} from './styles';
  import ElectionsScreen from './ElectionsScreen';
import TestPage from './TestPage';

const instructions = Platform.select({
  ios: 'This one is for you Apple users!,\n' +
    'Welcome to iPCRFapp!',
  android: 'Welcome Androiders!,\n' +
    'This is andyPCRFapp!',
});


 class HomeScreen extends React.Component {
   static navigationOptions = {
     title: 'Welcome to Platinum City Residents Forum',
   };
   render() {
     const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Image
      source={ require('./assets/icons/pcrfhome.png')}
      style={{width: 400, height: 200}}
      />
        <Text style={styles.welcome}>
        Hello PCRF!
        </Text>
        <Text style={styles.instructions}>
          Welcome to your own App!
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button
          onPress={() => navigate('Elections')}
          title="Election Voting is now open!"
        />
        <Button
          onPress={() => navigate('TestPage')}
          title="Test Page!"
        />
      </View>
    );
  }
}


export const PCRFapp = StackNavigator({
  //LHS is SHort name for calling the class on the RHS
  Home: { screen: HomeScreen },
  TestPage: { screen: TestPage },
  Elections: {screen: ElectionsScreen},
  });

AppRegistry.registerComponent('PCRFapp', () => PCRFapp);
