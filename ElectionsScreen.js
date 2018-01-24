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
import GridList from 'react-native-grid-list';

const candidateDB = [ // homogeneous rendering between sections
  {data: [{name: 'GC1', photo: 'photo-url', flatNo: 'Flat No.'}, {name: 'GC2', photo: 'photo-url', flatNo: 'Flat No.'},{name: 'GC3', photo: 'photo-url', flatNo: 'Flat No.'}, {name: 'GC4', photo: 'photo-url', flatNo: 'Flat No.'}, {name: 'GC5', photo: 'photo-url', flatNo: 'Flat No.'}, ], title: 'General Candidates'},
  {data: [{name: 'RC1', photo: 'photo-url', flatNo: 'Flat No.'}, {name: 'RC2', photo: 'photo-url', flatNo: 'Flat No.'},{name: 'RC3', photo: 'photo-url', flatNo: 'Flat No.'}, {name: 'RC4', photo: 'photo-url', flatNo: 'Flat No.'}], title: 'Reserved Candidates'},
  {data: [{name: 'NC1', photo: 'photo-url', flatNo: 'Flat No.'}, {name: 'NC2', photo: 'photo-url', flatNo: 'Flat No.'}], title: 'Nominated Candidates'},

];


export default class ElectionsScreen extends React.Component {

  renderHeader = (headerItem) => {
    return <View style={styles.sectionHeader}><Text style={styles.sectionHeaderText}> {headerItem.section.title} </Text></View>
  }

  renderItem = (item) => {
    return (
      <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Text>{item.item.photo}</Text>
          <Text>{item.item.name}</Text>
          <Text>{item.item.flatNo}</Text>
      </View>);
  }

  renderGridItem = ({ item, index }) => (
    <View style={{justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center',}}>
      <Text>{item.name}</Text>
      <Image style={styles.image} source={item.photo} />
      <Text>{item.flatNo}</Text>
    </View>
  );

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
