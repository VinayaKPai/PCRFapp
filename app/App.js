/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  AppRegistry,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

// Importing all screens here
import HomeScreen from './components/HomeScreen';
import TestPage from './components/TestPage';
import ElectionContainer from './components/ElectionContainer';
import ConfirmationScreen from './components/ConfirmationScreen';
import SectionDisplayScreen from './components/SectionDisplayScreen';
import ThankYouPage from './components/ThankYouPage';
 class App extends React.Component {
   render() {
    const { navigate } = this.props.navigation;
    return (
      navigate('Home')
    );
  }
}


export const PCRFapp = StackNavigator({
  //LHS is SHort name for calling the class on the RHS
  Home: { screen: HomeScreen },
  //TESTPAGE is only for testing during development
  //Should be removed after all testing is over
  TestPage: { screen: TestPage },
  //Related only to the Election voting feature
  ElectionContainer: {screen: ElectionContainer},
  ConfirmationPage: { screen: ConfirmationScreen },
  ThankYouPage: { screen: ThankYouPage},
  });

AppRegistry.registerComponent('PCRFapp', () => PCRFapp);
