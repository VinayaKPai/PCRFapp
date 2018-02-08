import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Image, Text, Alert, Button, ScrollView, TouchableOpacity } from 'react-native';
import {styles} from './../styles/styles';
import { StackNavigator } from 'react-navigation';
import SectionDisplayScreen from './SectionDisplayScreen';
const candidates2018 =  {// homogeneous rendering between sections
  GeneralCandidates: {
    title: 'General Candidates',
    details: [
      {name: 'GC1', id:'2018GC1', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.1', isChecked: false},
      {name: 'GC2', id:'2018GC2', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.2', isChecked: false},
      {name: 'GC3', id:'2018GC3', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.3', isChecked: false},
      {name: 'GC4', id:'2018GC4', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.4', isChecked: false},
      {name: 'GC5', id:'2018GC5', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.5', isChecked: false},
      {name: 'GC6', id:'2018GC6', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.6', isChecked: false},
      {name: 'GC7', id:'2018GC7', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.7', isChecked: false},
    ],
  },
  ReservedCandidates: {
    title: 'Reserved Candidates',
    details: [
      {name: 'RC1', id:'2018RC1', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.8', isChecked: false},
      {name: 'RC2', id:'2018RC2', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.9', isChecked: false},
      {name: 'RC3', id:'2018RC3', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.10', isChecked: false},
      {name: 'RC4', id:'2018RC4', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.11', isChecked: false},
    ],
  },
  NominatedCandidates: {
    title: 'Nominated Candidates',
    details: [
      {name: 'NC1', id:'2018NC1', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.12', isChecked: false},
      {name: 'NC2', id:'2018NC2', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.13', isChecked: false},
      {name: 'NC3', id:'2018NC3', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.14', isChecked: false},
    ],
  },
};

const maxGCSelected = 1;
const maxRCSelected = 1;
const maxNCSelected = 1;

export default class ElectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anyValueChanged: false,
      selectedCandidate: [],
      categorySelectedCountGC: 0,
      categorySelectedCountRC: 0,
      categorySelectedCountNC: 0,
    };
  }



  confirmSelectedCandidates() {
    var selectedCandidate = [];
    var candidatesGC = candidates2018.GeneralCandidates.details;
    var candidatesRC = candidates2018.ReservedCandidates.details;
    var candidatesNC = candidates2018.NominatedCandidates.details;

    for (i=0;i<candidatesGC.length;i++) {
      if (candidatesGC[i].isChecked==true){
        selectedCandidate.push(candidatesGC[i]);
      }
    }
    categorySelectedCount = 0;
    for (j=0;j<candidatesRC.length;j++) {
      if (candidatesRC[j].isChecked==true){
        selectedCandidate.push(candidatesRC[j]);
      }
    }
    categorySelectedCount = 0;
    for (k=0;k<candidatesNC.length;k++) {
      if (candidatesNC[k].isChecked==true){
        selectedCandidate.push(candidatesNC[k]);
      }
    }

    return selectedCandidate;
  }

  callBackSectionDisplay(candidateData, category) {
    //This function changes the ischecked value of the candidates
    switch (category) {
      case 'General Candidates':
      for (var i=0;i<candidates2018.GeneralCandidates.details.length;i++) {
        if (candidates2018.GeneralCandidates.details[i].id==candidateData.id) {
          candidates2018.GeneralCandidates.details[i].isChecked=candidateData.isChecked;
          if (candidates2018.GeneralCandidates.details[i].isChecked) {
            this.setState({categorySelectedCountGC: this.state.categorySelectedCountGC+1 });
          } else {
            this.setState({categorySelectedCountGC: this.state.categorySelectedCountGC-1 });
          }
        }

      }
              break;
      case 'Reserved Candidates' :
      for (var i=0;i<candidates2018.ReservedCandidates.details.length;i++) {
        if (candidates2018.ReservedCandidates.details[i].id==candidateData.id) {
          candidates2018.ReservedCandidates.details[i].isChecked=candidateData.isChecked;
          if (candidates2018.ReservedCandidates.details[i].isChecked) {
            this.setState({categorySelectedCountRC: this.state.categorySelectedCountRC+1 });
          } else {
            this.setState({categorySelectedCountRC: this.state.categorySelectedCountRC-1 });
          }
        }
      }
              break;
      case 'Nominated Candidates':
      for (var i=0;i<candidates2018.NominatedCandidates.details.length;i++) {
        if (candidates2018.NominatedCandidates.details[i].id==candidateData.id) {
          candidates2018.NominatedCandidates.details[i].isChecked=candidateData.isChecked;
          if (candidates2018.NominatedCandidates.details[i].isChecked) {
            this.setState({categorySelectedCountNC: this.state.categorySelectedCountNC+1 });
          } else {
            this.setState({categorySelectedCountNC: this.state.categorySelectedCountNC-1 });
          }
        }
      }
              break;
    }

  }



  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View>
          <Text style={styles.sectionHeader} >Election to the PCRF Committee is now open. You may exercise your vote uptil Date Time  only</Text>
          <View style={styles.gridHeader}>
            <Text  style={styles.gridHeaderText}>General Candidates</Text>
            <Text style={(this.state.categorySelectedCountGC==maxGCSelected)?styles.gridHeaderCountCorrect:styles.gridHeaderCountIncorrect}>[{this.state.categorySelectedCountGC}/{maxGCSelected}]</Text>
          </View>
          <SectionDisplayScreen
            candidatesData={candidates2018.GeneralCandidates}
            callBackSectionDisplay={this.callBackSectionDisplay.bind(this)}
          />
          <View style={styles.gridHeader}>
            <Text  style={styles.gridHeaderText}>Reserved Candidates</Text>
            <Text style={(this.state.categorySelectedCountRC==maxRCSelected)?styles.gridHeaderCountCorrect:styles.gridHeaderCountIncorrect}>[{this.state.categorySelectedCountRC}/{maxRCSelected}]</Text>
          </View>
          <SectionDisplayScreen
            candidatesData={candidates2018.ReservedCandidates}
            callBackSectionDisplay={this.callBackSectionDisplay.bind(this)}
          />
          <View style={styles.gridHeader}>
            <Text  style={styles.gridHeaderText}>Nominated Candidates</Text>
            <Text style={(this.state.categorySelectedCountNC==maxNCSelected)?styles.gridHeaderCountCorrect:styles.gridHeaderCountIncorrect}>[{this.state.categorySelectedCountNC}/{maxNCSelected}]</Text>
          </View>
          <SectionDisplayScreen
            candidatesData={candidates2018.NominatedCandidates}
            callBackSectionDisplay={this.callBackSectionDisplay.bind(this)}
          />
        </View>
        <View>
          <Button
          onPress={() => navigate('ConfirmationPage',{selectedCandidateList: this.confirmSelectedCandidates()})}
          disabled={((this.state.categorySelectedCountGC==maxGCSelected)&&(this.state.categorySelectedCountRC==maxRCSelected)&&(this.state.categorySelectedCountNC==maxNCSelected))?false:true}
          title="My Selected Candidates!"
          />
        </View>
        <View>
          <Text>Confirmation</Text>
          {this.state.selectedCandidate}
        </View>
      </ScrollView>
    )
  }
}
// <Button
// onPress={() => this.confirmSelectedCandidates()}
// title="View my Votes"
// />
