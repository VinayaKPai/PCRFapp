import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Image, Text, Alert, Button, ScrollView, TouchableOpacity } from 'react-native';
import {styles} from './../styles/styles';
import { StackNavigator } from 'react-navigation';

export default class ThankYouPage extends Component {

  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.testPageContainer}>
        <Text style={styles.textSuccess}>Thank You for exercising your Vote!</Text>
        <Text>Your vote will be available to the administrator for counting after the in-person voting ends on voting day at PCRF.</Text>
        <Button
        onPress={() => navigate('Home')}
        title="Home!"
        />
      </View>
    )
  }
}
