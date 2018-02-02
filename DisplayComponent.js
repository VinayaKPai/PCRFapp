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
      anyValueChanged: false,
      listDataFromChild: {
        name: null,
        thumbnail: {uri: null},
        flatNo:  null,
        isChecked: null,
      },
      selectedCandidateList: [],
      displaySelectedCandidateList: [],
    };
  }
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  myCallbackGridItem = (dataFromChild) => {
    for (var i=0; i<this.props.children; i++) {
      if(this.props.children[i].name==dataFromChild.name) {
        this.props.children[i].isChecked=!this.props.children[i].isChecked;
      }
    }
      this.setState({ listDataFromChild: dataFromChild });
  }

  onSubmit() {
    var selectedCandidateList = [];
    for(var i=0; i<this.props.children.length; i++){
      if (this.props.children[i].isChecked) {
        selectedCandidateList.push(this.props.children[i]);
      }
    }
    this.setState({selectedCandidateList: selectedCandidateList}, function() {
      this.displaySelectedCandidateList();
    });
  }

  renderGridItems() {
    var renderedContent = [];
    for(var i=0; i<this.props.children.length; i++){
      renderedContent.push(<DisplayGridItem key={"gridItem-"+i} callbackFromParent={this.myCallbackGridItem.bind(this)} candidateData={this.props.children[i]}/>);
    }
    return renderedContent;
  }

  displaySelectedCandidateList() {
    var selectedCandidateListDisplay=[];
    for(var i=0; i<this.state.selectedCandidateList.length;i++) {
        selectedCandidateListDisplay.push(<View key={i}>
          <Text>{"\n"} {i+1}. Name: {this.state.selectedCandidateList[i].name}
                {"\n"}    Thumbnail: {this.state.selectedCandidateList[i].thumbnail.uri}
                {"\n"}    Flat Number: {this.state.selectedCandidateList[i].flatNo}
          </Text>
          </View>);
    }

  this.setState({displaySelectedCandidateList:  selectedCandidateListDisplay });

  }

render = () => {
    const { buttonStyles, children} = this.props;

    return (
      <ScrollView>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
          {this.renderGridItems()}
          </View>
          <View>
          <Button
            onPress={() => this.onSubmit(children)}
            title="Submit selected Candidates"
          />
          <Text>My Voted Candidates = {this.state.selectedCandidateList.length}</Text>
          <Text>Selected Candidate List</Text>
          {this.state.displaySelectedCandidateList}
        </View>
      </ScrollView>
    );
  }
}
