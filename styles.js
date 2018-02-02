import React from 'react';
import {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  buttonA: { //for displayComponent
    backgroundColor: '#d80c1c',
  },
  buttonB: { //for displayComponent
    backgroundColor: '#d8dc1c',
  },
  container: {
   flex: 1,
   paddingTop: 10,
   paddingLeft: 10,
   paddingRight: 10,
   paddingBottom: 70,
  },
  displayComponent: {
   flex: 1,
   padding: 22,
   height: 300,
   width: 300,
   backgroundColor: '#d81c1c',
  },
  gridimage: {
    width: '50%',
    // maxWidth: 100,
    height: '50%',
    // maxHeight: 50,
    borderRadius: 10,
  },
  gridItem: {
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 1,
    width: '24%',
    padding: '0.5%',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6A7da',
    backgroundColor: '#cce6ff',
  },
  image: {
    width: '100%',
    maxWidth: 150,
    height: '70%',
    borderRadius: 10,
  },
  item: {
    padding: 10,
  },
  itemText: {
    fontSize: 18,
  },
  itemImage: {
    width: 55,
    height: 42,
  },
  likeButton: {
    backgroundColor: '#33adff',
    fontSize: 14,
    fontWeight: 'bold',
    width: '98%',
    marginTop: 10,
  },
  testPageContainer: {
   flex: 1,
   padding: 22,
   height: 300,
   width: '100%',
  },
  textSelected: {//for displayComponent selected item
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'green',
    width: 55,
  },
  textDeselected: {//for displayComponent for unselected item
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#002699',
    width: 55,
  },
  textSecondary: {//for displayComponent for unselected item
    fontSize: 10,
    color: 'white',
    backgroundColor: '#002699',
    width: 55,
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
})
