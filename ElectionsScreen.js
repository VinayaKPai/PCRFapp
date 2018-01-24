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
import {styles} from './styles';
import GridList from 'react-native-grid-list';

const candidateDB =  {// homogeneous rendering between sections
  GeneralCandidates: {data: [
    {name: 'GC1', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.'},
    {name: 'GC2', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.'},
    {name: 'GC3', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.'},
    {name: 'GC1', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.'},
    {name: 'GC2', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.'},
    {name: 'GC3', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.'},
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
//Display of section list items
  renderItem = (item) => {
    return (
      <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>Grid list inside render item of section list</Text>
        <GridList
          showSeparator
          data={[item]}
          numColumns={1}
          renderItem={this.renderGridItem}
        />
      </View>);

  }

  //display of grid list
  renderGridItem = ({ item, index }) => (
    <View style={{justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center',}}>
      <Text>{item.name}</Text>
      <Image style={styles.image} source={item.thumbnail} />
      <Text>{item.flatNo}</Text>
    </View>
  )
 static navigationOptions = {
   title: 'Election February 2018',
 };

 render() {
   const { navigate } = this.props.navigation;
   return (

     <View style={styles.container}>
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

    </View>

   );
 }
}
