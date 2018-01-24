import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import GridList from 'react-native-grid-list';

const items = [
  { thumbnail: { uri: 'https://lorempixel.com/200/200/animals' }, name: 'GC1', flatNo: 'Flat No.' },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/city' }, name: 'GC1', flatNo: 'Flat No.' },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/nature' }, name: 'GC1', flatNo: 'Flat No.' },
  { thumbnail: { uri: 'https://lorempixel.com/200/200/cats' }, name: 'GC1', flatNo: 'Flat No.' },
];

export default class TestPage extends PureComponent {
  renderGridItem = ({ item, index }) => (
    <View style={{justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center',}}>
      <Text>{item.name}</Text>
      <Image style={styles.image} source={item.thumbnail} />
      <Text>{item.flatNo}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <GridList
          showSeparator
          data={items}
          numColumns={2}
          renderItem={this.renderGridItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
});
