import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image, TouchableOpacity, Button } from 'react-native';
import {styles} from './styles';
import checkbox from './assets/icons/ic_check_box_outline_blank.png';
import checkboxChecked from './assets/icons/ic_check_box.png';

export default class displayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {chosen: [],
      rejected: [],
      textStyles: [],
      anyValueChanged: false,
      selectedCount: 0,
      deselectedCount: 0,
      selectedList: [],
      selectedListTemp: [],
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

renderGrid () {
  var children = this.props.children;
  var textStyles = this.props.textStyles;
  var renderedGrid = [];
  for(var i=0; i<children.length; i++){
    console.log(children[i]);
    var dispName = children[i].name;
    var disp = (<TouchableOpacity key={dispName} onPress={this.showId.bind(this,dispName) } style={styles.gridItem}>
      <View>
      <Image source={this.props.children[i].isChecked=='T'?checkboxChecked:checkbox} />
      <Text style={children[i].isChecked=='T'?textStyles[0]:textStyles[1]}> {children[i].name}</Text>
      <Image style={{width: 42, height: 42}} source={children[i].thumbnail} />
      <Text>{children[i].flatNo}</Text>
      </View>
    </TouchableOpacity>);
    renderedGrid.push(disp);
    console.log(renderedGrid[i]);
  }
  return (renderedGrid);
}

showId (clickedName){
  for (i=0;i<this.props.children.length;i++){
    var clickedChecked = this.props.children[i].isChecked;
    var clickedCandidate = this.props.children[i].name;
    if (clickedName==clickedCandidate) {
      if (clickedChecked=='F'){
        this.setState({anyValueChanged: true});
        this.props.children[i].isChecked='T';
      } else if (clickedChecked=='T'){
        this.setState({anyValueChanged: false});
        this.props.children[i].isChecked='F';
      }
    }
  }

}
  onSubmit(childrenTemp) {
    var selectedCandidateList = [];
    for(var i=0; i<childrenTemp.length; i++){
      if (childrenTemp[i].isChecked=='T') {
        selectedCandidateList.push(childrenTemp[i]);
      }
    }
    this.setState({selectedCandidateList: selectedCandidateList});
    console.log(selectedCandidateList);
  }

render = () => {
    const { textStyles, buttonStyles, children} = this.props;

    return (
      <View>
        <Text>Total Selected = {this.state.selectedCount-this.state.deselectedCount}</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {this.renderGrid()}
        </View>
        <Button
          onPress={() => this.onSubmit(children)}
          title="Submit selected Candidates"
        />
        <Text>My Voted Candidates =     {""+this.state.selectedList}
        </Text>
      </View>
    );
  }
}
