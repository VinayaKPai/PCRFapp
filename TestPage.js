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
      {name: 'GC1', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.1', isChecked: false},
      {name: 'GC2', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.2', isChecked: false},
      {name: 'GC3', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.3', isChecked: false},
      {name: 'GC4', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.4', isChecked: false},
      {name: 'GC5', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.5', isChecked: false},
      {name: 'GC6', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.6', isChecked: false},
      {name: 'GC7', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.7', isChecked: false},
    ],
  },
  ReservedCandidates: {
    title: 'Reserved Candidates',
    data: [
      {name: 'RC1', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.8', isChecked: false},
    ],
  },
  NominatedCandidates: {
    title: 'Nominated Candidates',
    data: [
      {name: 'NC1', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.9', isChecked: false},
      {name: 'NC2', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.10', isChecked: false}
    ],
  },
};


export default class TestPage extends PureComponent {
  constructor(props) {
     super(props);
     this.state = {
       isChecked: false,
       selectedCandidateList: [],
       selectedCandidateName: "Aditya",
       anyValueChanged: false,
     };
   }
   static navigationOptions = {
     title: 'Test Page',
   };

   myCallBack (selectedCandidateName) {
     alert(selectedCandidateName);
     // alert(this.state.anyValueChanged?"True":"False");
     for(var i=0;i<candidateDB1.GeneralCandidates.data.length;i++) {
       if(candidateDB1.GeneralCandidates.data[i].name==selectedCandidateName) {
         candidateDB1.GeneralCandidates.data[i].isChecked = !candidateDB1.GeneralCandidates.data[i].isChecked;
         var anyValueChanged = this.state.anyValueChanged;
          this.setState({anyValueChanged: !anyValueChanged});
       }
     }
     for(var j=0;j<candidateDB1.ReservedCandidates.data.length;j++) {
       if(candidateDB1.ReservedCandidates.data[j].name==selectedCandidateName) {
         candidateDB1.ReservedCandidates.data[j].isChecked = !candidateDB1.ReservedCandidates.data[j].isChecked;
         // this.setState({anyValueChanged: !this.state.anyValueChanged});
       }
     }
     for(var k=0;k<candidateDB1.NominatedCandidates.data.length;k++) {
       if(candidateDB1.NominatedCandidates.data[k].name==selectedCandidateName) {
         candidateDB1.NominatedCandidates.data[k].isChecked = !candidateDB1.NominatedCandidates.data[k].isChecked;
         // this.setState({anyValueChanged: !this.state.anyValueChanged});
       }
     }
     // this.setState({selectedCandidateName: selectedCandidateName});
   }

   onSubmit() {
     var selectedCandidateList = [];
     for(var i=0;i<candidateDB1.GeneralCandidates.data.length;i++) {
       if(candidateDB1.GeneralCandidates.data[i].isChecked==true) {
         selectedCandidateList.push(candidateDB1.GeneralCandidates.data[i]);
       }
     }
     for(var j=0;j<candidateDB1.ReservedCandidates.data.length;j++) {
       if(candidateDB1.ReservedCandidates.data[j].isChecked==true) {
         selectedCandidateList.push(candidateDB1.ReservedCandidates.data[j]);
       }
     }
     for(var k=0;k<candidateDB1.NominatedCandidates.data.length;k++) {
       if(candidateDB1.NominatedCandidates.data[k].isChecked==true) {
         selectedCandidateList.push(candidateDB1.NominatedCandidates.data[k]);
       }
     }
     this.setState({selectedCandidateList: selectedCandidateList});
   }
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
          callBackFunction={this.myCallBack}
          children={candidateDB1.GeneralCandidates.data}
          textStyles={[styles.textSelected, styles.textDeselected]}/>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.likeButton}>Reserved Candidates</Text>
            <Text style={{width: '2%',backgroundColor: '#33adff', textAlign :'right'}}>0</Text>
          </View>
          <DisplayComponent
          callBackFunction={this.myCallBack}
          children={candidateDB1.ReservedCandidates.data}
          textStyles={[styles.textSelected, styles.textDeselected]}/>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.likeButton}>Nominated Candidates</Text>
            <Text style={{width: '2%',backgroundColor: '#33adff', textAlign :'right'}}>0</Text>
          </View>
          <DisplayComponent
          callBackFunction={this.myCallBack}
          children={candidateDB1.NominatedCandidates.data}
          textStyles={[styles.textSelected, styles.textDeselected]}/>
          <Text>My Voted Candidates =     {""+this.state.selectedCandidateList.length}</Text>
          <Text>My selected Candidates =     {this.state.selectedCandidateName}</Text>
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
