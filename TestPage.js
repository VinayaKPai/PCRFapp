import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, Text, Alert } from 'react-native';
import TestPageComponent from './TestPageComponent';


export default class TestPage extends PureComponent {
  constructor(props) {
     super(props);
     this.state = {isChecked: false};
     //this.setState()
   }

  onClick(data) {
    // this.setState({
    //         isChecked: !this.state.isChecked
    //     })
    //     // this.props.onClick();
  }
  render() {
    return (
      <View style={styles.testPageContainer}>
        <Text>aaaaa</Text>
        <TestPageComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
});
