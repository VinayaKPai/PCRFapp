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
  Header,
  ScrollView,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {styles} from './styles';
import GridList from 'react-native-grid-list';
import TestPageComponent from './TestPageComponent';


const candidateDB =  {// homogeneous rendering between sections
  GeneralCandidates: {data: [
    {name: 'GC1', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.'},
    {name: 'GC2', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.'},
    {name: 'GC3', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.'},
    {name: 'GC4', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.'},
    {name: 'GC5', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.'},
    {name: 'GC6', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.'},
    {name: 'GC7', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.'},
    ],
  title: 'General Candidates'},
  ReservedCandidates: {data: [
    {name: 'RC1', thumbnail: { uri: 'https://lorempixel.com/200/200/nature' }, flatNo: 'Flat No.'},
  ],
  title: 'Reserved Candidates'},
  NominatedCandidates: {data: [
    {name: 'NC1', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.'},
    {name: 'NC2', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.'}],
  title: 'Nominated Candidates'},
}
;




export default class ElectionsScreen extends React.Component {
//Header of Section List
  renderHeader = (headerItem) => {
    return <View style={styles.sectionHeader}><Text style={styles.sectionHeaderText}> {headerItem.section.title} </Text></View>
  }

  //display of grid list
  renderGridItem = ({ item, index }) => (
    <View style={styles.gridItem}>
      <Image style={styles.image} source={item.thumbnail} />
      <Text>{item.name} of {item.flatNo}</Text>
      <TestPageComponent/>

    </View>
  )
 static navigationOptions = {
   title: 'Election February 2018',
 };

 render() {
   const { navigate } = this.props.navigation;
   return (

     <ScrollView style={styles.container}>
       <Text>Election: Summary of Candidates</Text>

        <View style={styles.sectionHeader}><Text style={styles.sectionHeaderText}> {candidateDB.GeneralCandidates.title} </Text></View>
        <Text>Grid List Inside main render functions</Text>
                 <GridList
                    showSeparator
                   data={candidateDB.GeneralCandidates.data}
                   numColumns={3}
                   renderItem={this.renderGridItem}
                 />
         <View style={styles.sectionHeader}><Text style={styles.sectionHeaderText}> {candidateDB.ReservedCandidates.title} </Text></View>
         <Text>Grid List Inside main render functions</Text>
                  <GridList
                    showSeparator
                    data={candidateDB.ReservedCandidates.data}
                    numColumns={3}
                    renderItem={this.renderGridItem}
                  />
        <View style={styles.sectionHeader}><Text style={styles.sectionHeaderText}> {candidateDB.NominatedCandidates.title} </Text></View>
        <Text>Grid List Inside main render functions</Text>
                 <GridList
                   showSeparator
                   data={candidateDB.NominatedCandidates.data}
                   numColumns={3}
                   renderItem={this.renderGridItem}
                 />


    </ScrollView>

   );
 }
}
