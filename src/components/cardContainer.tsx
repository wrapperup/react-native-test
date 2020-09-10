import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 10,
  },
});

export default function cardContainer(props: any) {
  return <View style={styles.cardContainer}>{props.children}</View>;
}
