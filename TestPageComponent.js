import React, { Component } from 'react';
import { ScrollView, StyleSheet, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Display from 'react-native-display';


export default class TestPageComponent extends Component {
  constructor(props) {
     super(props);
     this.state = {isChecked: false};
     //this.setState()
   }

  onClick = () => {
    this.setState({ isChecked: !this.state.isChecked });
    // alert(!this.state.isChecked);
  }
  render() {
    return (
      <ScrollView>
        <Display enable={this.state.isChecked}>
          <TouchableOpacity onPress={this.onClick}>
            <Image style={styles.image} source={require('./assets/icons/ic_check_box.png')} />
          </TouchableOpacity>
        </Display>
        <Display enable={!this.state.isChecked}>
          <TouchableOpacity onPress={this.onClick}>
            <Image style={styles.image} source={require('./assets/icons/ic_check_box_outline_blank.png')} />
          </TouchableOpacity>
        </Display>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 30,
    height: 30,
    // borderRadius: 10,
  },
  fixedPosition: {
    position: 'absolute',
    top: 30,
    left: 50,
  }
});
