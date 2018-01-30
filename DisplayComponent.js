import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import {styles} from './styles';
import checkbox from './assets/icons/ic_check_box_outline_blank.png';
import checkboxChecked from './assets/icons/ic_check_box.png';

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
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => this.showId(children[0])}>
              <View style={{flexDirection:'row'}}>
                <Text style={children[0].isChecked=='T'?textStyles[0]:textStyles[1]}>Child 0 -{children[0].name}</Text>
                <Image source={children[0].isChecked=='T'?checkboxChecked:checkbox} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.showId(children[1])}>
              <View style={{flexDirection:'row'}}>
                <Text style={children[1].isChecked=='T'?textStyles[0]:textStyles[1]}>Child 1 -{children[1].name}</Text>
                <Image source={children[1].isChecked=='T'?checkboxChecked:checkbox} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.showId(children[2])}>
              <View style={{flexDirection:'row'}}>
                <Text style={children[2].isChecked=='T'?textStyles[0]:textStyles[1]}>Child 2 -{children[2].name}</Text>
                <Image source={children[2].isChecked=='T'?checkboxChecked:checkbox} />
              </View>
            </TouchableOpacity>
        </View>
        <Text>rejected = {""+this.state.rejected}</Text>

      </View>
    );
  }
}
