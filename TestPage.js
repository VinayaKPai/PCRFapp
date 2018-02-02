import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, Text, Alert, ScrollView, Button } from 'react-native';
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
      {name: 'RC1', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.8', isChecked: 'F'},
    ],
  },
  NominatedCandidates: {
    title: 'Nominated Candidates',
    data: [
      {name: 'NC1', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.9', isChecked: 'F'},
      {name: 'NC2', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.10', isChecked: 'F'}
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
        <View style={{flexDirection: 'row'}}>
          <Text style={{width: '98%',backgroundColor: '#005c99', color: '#ffffff', fontWeight: 'bold', fontSize: 15}}>Total Number of Candidates Selected = </Text>
          <Text style={{width: '2%',backgroundColor: '#005c99',  color: '#ffffff', textAlign :'right'}}>0</Text>
        </View>
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.likeButton}>General Candidates</Text>
            <Text style={{width: '2%', marginTop: 10, backgroundColor: '#33adff', textAlign :'right'}}>0</Text>
          </View>
          <DisplayComponent
          children={candidateDB1.GeneralCandidates.data}
          textStyles={[styles.textSelected, styles.textDeselected]}/>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.likeButton}>Reserved Candidates</Text>
            <Text style={{width: '2%',backgroundColor: '#33adff', textAlign :'right'}}>0</Text>
          </View>
          <DisplayComponent
          children={candidateDB1.ReservedCandidates.data}
          textStyles={[styles.textSelected, styles.textDeselected]}/>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.likeButton}>Nominated Candidates</Text>
            <Text style={{width: '2%',backgroundColor: '#33adff', textAlign :'right'}}>0</Text>
          </View>
          <DisplayComponent
          children={candidateDB1.NominatedCandidates.data}
          textStyles={[styles.textSelected, styles.textDeselected]}/>
          <Text>My Voted Candidates =     {""+this.state.selectedCandidateList}
          </Text>
        </ScrollView>
        <Text>asdf{this.state.selectedCandidateList}</Text>
        <Button
          onPress={() => this.onSubmit()}
          title="Submit selected Candidates"
        />
      </View>
    );
  }
}
