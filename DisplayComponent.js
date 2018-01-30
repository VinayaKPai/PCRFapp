import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {styles} from './styles';

export default class displayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {chosen: [], rejected: [], textStyles: [],};
  }
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    textStyles: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.shape({}),
    ]).isRequired,
  }
  showId (child){
    // alert(child.name);
    if (child.isChecked=='F'){
      child.isChecked = 'T';
      var chosenTemp = this.state.chosen;
      chosenTemp.push(child.name, child.isChecked,);
      console.log(chosenTemp);
      this.setState({chosen: chosenTemp});
      this.setState({textStyles: styles.textA});
    }
    else {
      child.isChecked='F';
      var rejectedTemp = this.state.rejected;
      rejectedTemp.push(child.name, child.isChecked);
      console.log(rejectedTemp);
      this.setState({rejected: rejectedTemp});
    }
  }


render = () => {
    const { textStyles, buttonStyles, children} = this.props;
    return (
      <View>
        <Text>chosen = {""+this.state.chosen}</Text>
        <TouchableOpacity onPress={() => this.showId(children[0])}>
            <Text style={textStyles}>Child 0 -{children[0].name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showId(children[1])}>
            <Text style={textStyles}>Child 1 -{children[1].name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.showId(children[2])}>
            <Text style={textStyles}>Child 2 -{children[2].name}</Text>
        </TouchableOpacity>
        <Text>rejected = {""+this.state.rejected}</Text>
      </View>
    );
  }
}
