import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, Text, Alert, Button,  ScrollView, TouchableOpacity } from 'react-native';
import {styles} from './../styles/styles';
import { StackNavigator } from 'react-navigation';
import DisplayCandidate from './DisplayCandidate';
export default class SectionDisplayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {anyValueChanged: false}
  }
  static propTypes = {
    candidatesData: PropTypes.object.isRequired,
    callBackSectionDisplay: PropTypes.func,
  }

renderCategory () {
    var candidateList = this.props.candidatesData;
    var category = this.props.candidatesData.title;
    var renderCategory = [];
    for(var i=0;i<candidateList.details.length;i++){
      // alert (candidates.data.length);
      renderCategory.push(
        <DisplayCandidate
        key={candidateList.details[i].id}
        candidateData={candidateList.details[i]}
        callBackDisplayCandidate={this.callBackDisplayCandidate.bind(this)}
        category={category}/>
      );

    }
    return (renderCategory);
  }

  callBackDisplayCandidate(candidateData, category) {
    this.props.callBackSectionDisplay(candidateData, category);
  }

  render () {

    return (
      <View style={styles.Container}>
        <View style={{borderWidth: 1, borderColor: 'blue'}}>
          
          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            {this.renderCategory()}
          </View>
        </View>
      </View>
    );
  }
}
