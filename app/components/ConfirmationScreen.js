import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Alert, Button, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './../styles/styles';
import { StackNavigator, NavigationActions } from 'react-navigation';
import DisplayCandidate from './DisplayCandidate';

export default class ConfirmationScreen extends Component {
  displaySelectedCandidates() {
    var selectedGC;
    var selectedRC;
    var selectedNC;
    var selectedCandidateList = this.props.navigation.state.params.selectedCandidateList;
    var renderedCandidateList = [];
    for (j=0;j<selectedCandidateList.length;j++) {
      renderedCandidateList.push(
        <DisplayCandidate
            key={selectedCandidateList[j].id}
            candidateData={selectedCandidateList[j]}
            displayType='Selected Candidates'
            slNo= {j+1}/>
      );
    }
    return renderedCandidateList;
  }

  reset(){
    return this.props.navigation.dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home'})
                    ]
                  }));
  }

  render () {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <Text style={{backgroundColor: 'green', fontWeight: 'bold', color: 'white'}}>My Selected Candidates</Text>
        <View>{this.displaySelectedCandidates()}</View>

        <Button
        onPress={() => this.reset()}
        title="Yes! I'm Done!"
        />
      </ScrollView>
    );

  }
}
