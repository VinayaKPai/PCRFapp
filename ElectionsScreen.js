import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  TextInput,
  Picker,
  Component,
  SectionList,
  FlatList,
  Header,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Accordion from 'react-native-collapsible/Accordion';
import {styles} from './styles';

const candidateDB = [ // homogeneous rendering between sections
  {data: [{name: 'GC1'}, {name: 'GC2'},{name: 'GC3'}, {name: 'GC4'}, {name: 'GC5'}, ], title: 'General Candidates'},
  {data: [{name: 'RC1'}, {name: 'RC2'},{name: 'RC3'}, {name: 'RC4'}], title: 'Reserved Candidates'},
  {data: [{name: 'NC1'}, {name: 'NC2'}], title: 'Nominated Candidates'},

];


export default class ElectionsScreen extends React.Component {

  renderHeader = (headerItem) => {return <View style={styles.sectionHeader}><Text style={styles.sectionHeaderText}> {headerItem.section.title} </Text></View>}
  renderItem = (item) => {return <Text>{item.item.name}</Text>}
 static navigationOptions = {
   title: 'Election February 2018',
 };
 render() {
   const { navigate } = this.props.navigation;
   return (

     <View style={styles.container}>
       <Text>Election: Summary of Candidates</Text>

       <SectionList
         renderItem={this.renderItem}
         renderSectionHeader={this.renderHeader}
         sections={candidateDB}
         keyExtractor={(item) => item.name}
       />
</View>

   );
 }
}
