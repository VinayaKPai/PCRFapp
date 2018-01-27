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
  gridItem: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    paddingBottom: 10,
   }
})
