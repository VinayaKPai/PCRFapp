import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, Text, Alert, Button,  ScrollView, TouchableOpacity } from 'react-native';
import {styles} from './../styles/styles';
import checkbox from './../assets/icons/ic_check_box_outline_blank.png';
import checkboxChecked from './../assets/icons/ic_check_box.png';

export default class DisplayCandidate extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    candidateData: PropTypes.object.isRequired,
    category: PropTypes.string,
    callBackDisplayCandidate: PropTypes.func,
    displayType: PropTypes.string,
    slNo: PropTypes.number,
  }

  registerVote (){
    // alert(this.props.candidateData.name);
    this.props.candidateData.isChecked=!this.props.candidateData.isChecked;
    this.props.callBackDisplayCandidate(this.props.candidateData, this.props.category);
  }

  render () {
    var renderedContent;
    if(this.props.displayType=='Selected Candidates') {
      renderedContent = (
        <View style={styles.gridTable}>
          <View style={styles.gridTableSlNo}>
            <Text>{this.props.slNo}</Text>
          </View>
          <View style={styles.gridTableDetails}>
            <View style={styles.gridTableCell}>
              <Text style={this.props.candidateData.isChecked?styles.textSelected:styles.textDeselected}> {this.props.candidateData.name}</Text>
            </View>
            <View style={styles.gridTableCell}>
              <Image style={styles.gridTableImage} source={this.props.candidateData.thumbnail} />
            </View>
            <View style={styles.gridTableCell}>
              <Text style={styles.textSecondary}>{this.props.candidateData.flatNo}</Text>
            </View>
          </View>
        </View>);
    } else {
      renderedContent = (<TouchableOpacity style={this.props.candidateData.isChecked?styles.gridItemContainerSelected:styles.gridItemContainer} onPress={() => this.registerVote()}>
        <Image source={this.props.candidateData.isChecked?checkboxChecked:checkbox} style={{width: 20, height: 20}}/>
        <View style={styles.gridItem}>
          <Text style={this.props.candidateData.isChecked?styles.textSelected:styles.textDeselected}> {this.props.candidateData.name}</Text>
          <Image style={styles.itemImage} source={this.props.candidateData.thumbnail} />
          <Text style={styles.textSecondary}>{this.props.candidateData.flatNo}</Text>

        </View>
      </TouchableOpacity>);
    }
    return (renderedContent);
  }
}
