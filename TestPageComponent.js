import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Display from 'react-native-display';
import TouchableOpacityComponent from './TouchableOpacityComponent';
import SelectMultiple from 'react-native-select-multiple';

const fruits = [
  { label: 'Apples', value: 'appls' },
  { label: 'Oranges', value: 'orngs' },
  { label: 'Pears', value: 'pears' }
];
export default class TestPageComponent extends Component {

  constructor(props) {
     super(props);
     this.state = {
       isChecked: true,
       checkedItems: [],
       selectedFruits: []
     };
   }
   onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({ selectedFruits })
  }

onClicked(id, isChk, checkedItemsTemp) {
  checkedItemsTemp.push(id);
  alert('clicked');
  // alert('Array on clicked TPComponent '+checkedItemsTemp);
  // alert('on clicked TPComponent '+id+"-"+isChk);
  this.setState({checkedItems: checkedItemsTemp});
}

  render() {
    // var checkedItems = [2, 3, 4];
    return (
      <ScrollView>
        <Text>TPC Begins</Text>
        <Text id='OnTestComponentPage' onPress={() => this.onClicked(this.props.id, this.state.isChecked, this.state.checkedItems)}>
          <Image style={styles.imageCheckBox} source={{uri: './assets/icons/ic_check_box.png'}}/>Click here TO On-Test-Component-Page id</Text>
        <Text>Display Enabled tag with touchable opacity imported component id=10.</Text>
        <Display enable={this.state.isChecked}>
          <Text>Touchable Opacity comp was here</Text>
        </Display>
        <Text>Display Enabled tag with touchable opacity imported component id=20.</Text>
        <Display enable={this.state.isChecked}>
          <Text>Touchable Opacity comp was here</Text>
        </Display>
        <Text>checkedItems Array = {this.state.checkedItems}</Text>
        <View>
        <SelectMultiple
          items={fruits}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange} />
        <Text>checkedItems Array = {this.state.selectedFruits.length}</Text>
      </View>
      <Text>TPC Ends</Text>
      </ScrollView>
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
