import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, Text, Alert } from 'react-native';
import TestPageComponent from './TestPageComponent';
import DisplayComponent from './DisplayComponent';
import {styles} from './styles';
import TouchableOpacityComponent from './TouchableOpacityComponent';
export default class TestPage extends PureComponent {
  constructor(props) {
     super(props);
     this.state = {isChecked: false};
     //this.setState()
   }
   static navigationOptions = {
     title: 'Test Page',
   };
  render() {
    return (
      <View style={styles.testPageContainer}>
        <Text>Test Page DispC below</Text>
        <DisplayComponent
        children={[
          {name: "Adi", isChecked: "F",},
          {name: "Abhi", isChecked: "F",},
          {name: "Kavya", isChecked: "F",},
        ]}
        textStyles={[styles.textA, styles.textB]}/>
      </View>
    );
  }
}
