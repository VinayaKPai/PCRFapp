import React from 'react';
import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 10,
   paddingLeft: 10,
   paddingRight: 10,
   paddingBottom: 70,
  },
  buttonA: { //for displayComponent
    backgroundColor: '#d80c1c',
  },
  buttonB: { //for displayComponent
    backgroundColor: '#d8dc1c',
  },
  textA: {//for displayComponent
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'green',
  },
  textB: {//for displayComponent
    fontWeight: 'bold',
    color: 'steelblue',
    backgroundColor: '#d8dc1c',
  },
  displayComponent: {
   flex: 1,
   padding: 22,
   height: 300,
   width: 300,
   backgroundColor: '#d81c1c',
  },
  testPageContainer: {
   flex: 1,
   padding: 22,
   height: 300,
   width: 300,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    backgroundColor: 'steelblue',
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
  },
  itemText: {
    fontSize: 18,
  },
  image: {
    width: '100%',
    maxWidth: 150,
    height: '70%',
    borderRadius: 10,
  },
  gridimage: {
    width: '50%',
    maxWidth: 100,
    height: '30%',
    maxHeight: 50,
    borderRadius: 10,
  },
  gridItem: {
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 1,
    width: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    paddingBottom: 10,
   }
})
