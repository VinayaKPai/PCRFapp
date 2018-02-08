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
  gridItemContainer: {
    flexDirection: 'row',
    margin: 1,
    width: '48%',
    padding: '0.5%',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6A7da',
    backgroundColor: '#cce6ff',
  },
  gridItem: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 1,
    padding: '0.5%',
  },
  gridTable: {
    flexDirection: 'row',
    margin: 5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6A7da',
    backgroundColor: '#cce6ff',
  },
  gridTableSlNo: {
    width: '10%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridTableDetails: {
    width: '90%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gridTableCell: {
    marginLeft: 5,
    marginRight: 5,
  },
  gridTableImage: {
    width: 50,
    height: 50,
  },
  gridHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    backgroundColor: '#33adff',
    flexDirection: 'row',
  },
  gridHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '80%',
  },
  gridHeaderCountCorrect: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '20%',
    color: 'green',
    textAlign :'right'
  },
  gridHeaderCountIncorrect: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '20%',
    color: 'red',
    textAlign :'right'
  },
  gridItemContainerSelected: {
    flexDirection: 'row',
    margin: 1,
    width: '48%',
    padding: '0.5%',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6A7da',
    backgroundColor: '#CAE8A2',
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
    width: 155,
    height: 142,
  },
  likeButton: {
    backgroundColor: '#33adff',
    fontSize: 14,
    fontWeight: 'bold',
    width: '98%',
    marginTop: 10,
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
  testPageContainer: {
   flex: 1,
   padding: 22,
   width: '100%',
   justifyContent: 'center',
   alignItems: 'center',
  },
  textSelected: {//for displayComponent selected item
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'green',
    width: 55,
  },
  textSuccess: {//for thankyou page selected item
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'green',
    width: '100%',
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
})
