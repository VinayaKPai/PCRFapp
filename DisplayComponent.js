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
  showId (child){

    if (child.isChecked=='F'){
      child.isChecked = 'T';
      this.setState({anyValueChanged: true});
      this.setState({ selectedCount: this.state.selectedCount + 1 })
      this.setState({selectedList: this.state.selectedList+(child.name)})
    }
    else if (child.isChecked=='T'){
      child.isChecked = 'F';
      this.setState({anyValueChanged: false});
      this.setState({ deselectedCount: this.state.deselectedCount + 1 })
    }
    return child;
  }
  selectedList() {
    alert ("DONE!");
  }

render = () => {
    const { textStyles, buttonStyles, children} = this.props;

    return (
      <View>
        <Text>Total Selected = {this.state.selectedCount-this.state.deselectedCount}</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => children[0] = this.showId(children[0])}>
              <View style={{flexDirection:'row'}}>
                <Text style={children[0].isChecked=='T'?textStyles[0]:textStyles[1]}>Child 0 - {children[0].name} - {children[0].isChecked}</Text>
                <Image source={children[0].isChecked=='T'?checkboxChecked:checkbox} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => children[1] = this.showId(children[1])}>
              <View style={{flexDirection:'row'}}>
                <Text style={children[1].isChecked=='T'?textStyles[0]:textStyles[1]}>Child 1 -{children[1].name} - {children[1].isChecked}</Text>
                <Image source={children[1].isChecked=='T'?checkboxChecked:checkbox} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => children[2] = this.showId(children[2])}>
              <View style={{flexDirection:'row'}}>
                <Text style={children[2].isChecked=='T'?textStyles[0]:textStyles[1]}>Child 2 -{children[2].name} - {children[2].isChecked}</Text>
                <Image source={children[2].isChecked=='T'?checkboxChecked:checkbox} />
              </View>
            </TouchableOpacity>

            <Text>My Voted Candidates =     {this.state.selectedList}

            </Text>
        </View>
      </View>
    );
  }
}
