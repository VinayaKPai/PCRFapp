import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Display from 'react-native-display';

const checkedItems = [];
export default class TouchableOpacityComponent extends Component {
  constructor(props) {
     super(props);
     this.state = {isChecked: false};
     //this.setState()
   }

  onClick = (id, imgSrc) => {
    this.setState({ isChecked: !this.state.isChecked });
    alert(id+" from TOComponent  "+imgSrc);
    alert('Array from TOComponent  '+checkedItems);
    if (this.state.isChecked='true'){
      checkedItems.push(1);
    }
    else {
      checkedItems.push(-1);
    }
  }
  render() {
    var pic = this.props.imgSrc;
    return (
          <TouchableOpacity onPress={() => this.onClick(this.props.id, this.props.imgSrc)}>
            <Text>Id {this.props.id} - Img Src{this.props.imgSrc}</Text>
            <Text>TOC</Text>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageCheckBox: {
    width: 15,
    height: 15,
    // borderRadius: 10,
  },
  fixedPosition: {
    position: 'absolute',
    top: 30,
    left: 50,
  }
});
