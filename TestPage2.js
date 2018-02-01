import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Alert, ScrollView, TouchableOpacity } from 'react-native';
import {styles} from './styles';


export default class TestPage2 extends Component {
  constructor(props) {
    super(props);
    // this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  // handleKeyPress(item) {
  //   return function(e) {
  //     e.preventDefault();
  //
  //     if (e.nativeEvent.keyCode === 13) {
  //       console.log(`This is enter on item, which is called  ${item}!`);
  //     }
  //   }
  // }

  aditya(temp) {
    alert("hi " + temp);
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        onPress={this.aditya("item")}
         style={styles.gridItem}
      >
      <Text>ClickHere</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const items = ['Item1', 'Item2', 'Item3'];

    return (
      <div>
        { items.map(this.renderItem) }
      </div>
    )
  }
}
