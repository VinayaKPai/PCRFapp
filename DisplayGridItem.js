import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image, TouchableOpacity, Button } from 'react-native';
import {styles} from './styles';
import checkbox from './assets/icons/ic_check_box_outline_blank.png';
import checkboxChecked from './assets/icons/ic_check_box.png';

export default class DisplayGridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {anyValueChanged: false}
  }
  static propTypes = {
    candidateData: PropTypes.object.isRequired,
    callbackFromParent: PropTypes.func,
  }
  updateSelected (){
    var candidateData = this.props.candidateData;
    if(candidateData.isChecked==false) {
      candidateData.isChecked=true;
    } else if(candidateData.isChecked==true) {
      candidateData.isChecked=false;
    }
    this.props.callbackFromParent(candidateData);
  }

  displayCandidateDetails() {
    var candidateData = this.props.candidateData;
    alert("Name: " + candidateData.name +
          "\nThumbnail url: " + candidateData.thumbnail.uri +
          "\nFlat Number: " + candidateData.flatNo);
  }

  render = () => {
      const candidateData = this.props.candidateData;

      return (
          <TouchableOpacity onPress={() => this.updateSelected()} style={styles.gridItem}>
            <View>
              <Image source={candidateData.isChecked ? checkboxChecked : checkbox} />
              <Text style={candidateData.isChecked ? styles.textA : styles.textB}> {candidateData.name}</Text>
              <Image style={{width: 42, height: 42}} source={candidateData.thumbnail} />
              <Text>{candidateData.flatNo}</Text>
            </View>
          </TouchableOpacity>
      );
    }
}
