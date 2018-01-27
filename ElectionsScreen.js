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
import SelectMultiple from 'react-native-select-multiple';


const candidateDB =  {// homogeneous rendering between sections
  GeneralCandidates: {
    title: 'General Candidates',
    data: [
      {label: 'GC1', value: {name: 'GC1', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.1'}},
      {label: 'GC2', value: {name: 'GC2', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.2'}},
      {label: 'GC3', value: {name: 'GC3', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.3'}},
      {label: 'GC4', value: {name: 'GC4', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.4'}},
      {label: 'GC5', value: {name: 'GC5', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.5'}},
      {label: 'GC6', value: {name: 'GC6', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.6'}},
      {label: 'GC7', value: {name: 'GC7', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.7'}},
    ],
  },
  ReservedCandidates: {
    title: 'Reserved Candidates',
    data: [
      {label: 'RC1', value: {name: 'RC1', thumbnail: { uri: 'https://lorempixel.com/200/200/nature' }, flatNo: 'Flat No.'}},
    ],
  },
  NominatedCandidates: {
    title: 'Nominated Candidates',
    data: [
      {label: 'NC1', value: {name: 'NC1', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.'}},
      {label: 'NC2', value: {name: 'NC2', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.'}}
    ],
  },
};
const candidateDB1 =  {// homogeneous rendering between sections
  GeneralCandidates: {
    title: 'General Candidates',
    data: [
      {name: 'GC1', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.1'},
      {name: 'GC2', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.2'},
      {name: 'GC3', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.3'},
      {name: 'GC4', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.4'},
      {name: 'GC5', thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, flatNo: 'Flat No.5'},
      {name: 'GC6', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.6'},
      {name: 'GC7', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.7'},
    ],
  },
  ReservedCandidates: {
    title: 'Reserved Candidates',
    data: [
      {name: 'RC1', thumbnail: { uri: 'https://lorempixel.com/200/200/nature' }, flatNo: 'Flat No.8'},
    ],
  },
  NominatedCandidates: {
    title: 'Nominated Candidates',
    data: [
      {name: 'NC1', thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, flatNo: 'Flat No.9'},
      {name: 'NC2', thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, flatNo: 'Flat No.10'}
    ],
  },
};

const renderLabel = (label, style, selected, rowData) => {
// console.log(rowData);
  return (
    <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
    <View style={{marginRight: 10}}>
      <Text style={style}>{rowData.value.name}</Text>
    </View>
      <Image style={{width: 42, height: 42}} source={rowData.value.thumbnail} />
      <View style={{marginLeft: 10}}>
        <Text style={style}>{rowData.value.flatNo}</Text>
      </View>
    </View>
  )
}

export default class ElectionsScreen extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       selectedGeneralCandidates: [],
       selectedReservedCandidates: [],
       selectedNominatedCandidates: [],
     };
   }

  onSelectionsChangeGeneral = (selectedGeneralCandidates, value) => {
    this.setState({ selectedGeneralCandidates });
  }
  onSelectionsChangeReserved = (selectedReservedCandidates, value) => {
   this.setState({ selectedReservedCandidates });
  }
  onSelectionsChangeNominated = (selectedNominatedCandidates, value) => {
    this.setState({ selectedNominatedCandidates });
  }
  onSelectionsChange = (selectedCandidates, value) => {
    this.setState({ selectedCandidates });
  }
//Header of Section List
  renderHeader = (headerItem) => {
    return <View style={styles.sectionHeader}><Text style={styles.sectionHeaderText}> {headerItem.section.title} </Text></View>
  }

  //display of grid list
  renderGridItem = ({ item, index }) => (
    <View style={styles.gridItem}>
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
   var selectedGeneralCandidates = this.state.selectedGeneralCandidates;
   var selectedReservedCandidates = this.state.selectedReservedCandidates;
   var selectedNominatedCandidates = this.state.selectedNominatedCandidates;
   return (
     <View style={styles.container}>
         <View>
            <Text>Total Checked Items = [{selectedGeneralCandidates.length + selectedReservedCandidates.length + selectedNominatedCandidates.length}/10]</Text>
         </View>
         <ScrollView>
             <Text>Election: Summary of Candidates</Text>


             <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}> {candidateDB.GeneralCandidates.title} - [{selectedGeneralCandidates.length}/7]</Text>
             </View>
             <Text>Grid List Inside main render functions</Text>
             <SelectMultiple
                 items={candidateDB.GeneralCandidates.data}
                 renderLabel={renderLabel}
                 selectedItems={selectedGeneralCandidates}
                 onSelectionsChange={this.onSelectionsChangeGeneral}
             />


             <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}> {candidateDB.ReservedCandidates.title} - [{this.state.selectedReservedCandidates.length}/1]</Text>
             </View>
             <Text>Grid List Inside main render functions</Text>
             <SelectMultiple
                 items={candidateDB.ReservedCandidates.data}
                 renderLabel={renderLabel}
                 selectedItems={this.state.selectedReservedCandidates}
                 onSelectionsChange={this.onSelectionsChangeReserved}
              />


             <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}> {candidateDB.NominatedCandidates.title} - [{this.state.selectedNominatedCandidates.length}/2]</Text>
             </View>
             <Text>Grid List Inside main render functions</Text>
             <SelectMultiple
                 items={candidateDB.NominatedCandidates.data}
                 renderLabel={renderLabel}
                 selectedItems={this.state.selectedNominatedCandidates}
                 onSelectionsChange={this.onSelectionsChangeNominated}
             />



             <View style={{padding:3, backgroundColor: 'black'}}></View>



             <Text>Election: Summary of Candidates</Text>


             <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}> {candidateDB.GeneralCandidates.title}</Text>
             </View>
             <Text>Grid List Inside main render functions</Text>
             <GridList
                 showSeparator
                 data={candidateDB1.GeneralCandidates.data}
                 numColumns={3}
                 renderItem={this.renderGridItem}
             />


             <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}> {candidateDB.ReservedCandidates.title}</Text>
             </View>
             <Text>Grid List Inside main render functions</Text>
             <GridList
                 showSeparator
                 data={candidateDB1.ReservedCandidates.data}
                 numColumns={3}
                 renderItem={this.renderGridItem}
             />


             <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}> {candidateDB.NominatedCandidates.title}</Text>
             </View>
             <Text>Grid List Inside main render functions</Text>
             <GridList
                 showSeparator
                 data={candidateDB1.NominatedCandidates.data}
                 numColumns={3}
                 renderItem={this.renderGridItem}
             />


             <View style={{margin:10}}></View>


         </ScrollView>
         <View style={{flex:1, position: 'absolute', bottom: 0, right: 0, left: 0, height: 20, width: '150%', backgroundColor: 'steelblue'}}>
            <Text>This is the footer section</Text>
         </View>
     </View>
   );
 }
}
