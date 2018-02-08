import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, Text, Alert, ScrollView, Button } from 'react-native';
import {styles} from './../styles/styles';

export default class TestPage extends PureComponent {
  constructor(props) {
     super(props);

   }
   static navigationOptions = {
     title: 'Test Page',
   };

  render() {
    return (
      <View style={styles.testPageContainer}>
        <Text> DO ALL TESTING HERE!</Text>
      </View>
    );
  }
}
