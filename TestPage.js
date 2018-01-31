import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, Text, Alert } from 'react-native';
import TestPageComponent from './TestPageComponent';
import DisplayComponent from './DisplayComponent';
import {styles} from './styles';
import TouchableOpacityComponent from './TouchableOpacityComponent';

const candidateDB1 =  {// homogeneous rendering between sections
  GeneralCandidates: {
    title: 'General Candidates',
    data: [
      {name: 'GC1', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.1', isChecked: 'F'},
      {name: 'GC2', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.2', isChecked: 'F'},
      {name: 'GC3', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.3', isChecked: 'F'},
      {name: 'GC4', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.4', isChecked: 'F'},
      {name: 'GC5', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.5', isChecked: 'F'},
      {name: 'GC6', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.6', isChecked: 'F'},
      {name: 'GC7', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.7', isChecked: 'F'},
    ],
  },
  ReservedCandidates: {
    title: 'Reserved Candidates',
    data: [
      {name: 'RC1', thumbnail: { uri: 'https://lorempixel.com/200/200/nature' }, flatNo: 'Flat No.', isChecked: 'F'},
    ],
  },
  NominatedCandidates: {
    title: 'Nominated Candidates',
    data: [
      {name: 'NC1', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.', isChecked: 'F'},
      {name: 'NC2', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.', isChecked: 'F'}
    ],
  },
};

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
        children={candidateDB1.GeneralCandidates.data}
        textStyles={[styles.textA, styles.textB]}/>
      </View>
    );
  }
}
