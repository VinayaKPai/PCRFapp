import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import {styles} from './styles';
import checkbox from './assets/icons/ic_check_box_outline_blank.png';
import checkboxChecked from './assets/icons/ic_check_box.png';
import DisplayGridItem from './DisplayGridItem';

export default class displayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCandidates: [],
      textStyles: [],
      anyValueChanged: false,
      listDataFromChild: {},
      selectedCandidateList: [],
    };
  }
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    textStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
  }

  myCallback = (dataFromChild) => {
    for (var i=0; i<this.props.children; i++) {
      if(this.props.children[i].name==dataFromChild.name) {
        this.props.children[i].isChecked=dataFromChild.isChecked;
      }
    }
      this.setState({ listDataFromChild: dataFromChild });
  }

  onSubmit() {
    var selectedCandidateList = [];
    for(var i=0; i<this.props.children.length; i++){
      if (this.props.children[i].isChecked=='T') {
        selectedCandidateList.push(this.props.children[i]);
      }
    }
    this.setState({selectedCandidateList: selectedCandidateList});
    console.log(selectedCandidateList);
  }



render = () => {
    const { textStyles, buttonStyles, children} = this.props;

    return (
      <ScrollView>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          <DisplayGridItem callbackFromParent={this.myCallback} candidateData={children[0]} textStyles={textStyles}/>
          <DisplayGridItem callbackFromParent={this.myCallback} candidateData={children[1]} textStyles={textStyles}/>
          <DisplayGridItem callbackFromParent={this.myCallback} candidateData={children[2]} textStyles={textStyles}/>
          <DisplayGridItem callbackFromParent={this.myCallback} candidateData={children[3]} textStyles={textStyles}/>
          <DisplayGridItem callbackFromParent={this.myCallback} candidateData={children[4]} textStyles={textStyles}/>
          <DisplayGridItem callbackFromParent={this.myCallback} candidateData={children[5]} textStyles={textStyles}/>
          <DisplayGridItem callbackFromParent={this.myCallback} candidateData={children[6]} textStyles={textStyles}/>
          <Button
            onPress={() => this.onSubmit(children)}
            title="Submit selected Candidates"
          />
          <Text>My Voted Candidates = {this.state.selectedCandidateList.length}</Text>
          <Text>Candidate Details passed from Child =
                {"\n"} Name: {this.state.listDataFromChild.name}
                {"\n"} Thumbnail: {this.state.listDataFromChild.name}
                {"\n"} Flat Number: {this.state.listDataFromChild.name}
                {"\n"} Selected: {this.state.listDataFromChild.isChecked}
          </Text>
        </View>
      </ScrollView>
    );
  }
}
