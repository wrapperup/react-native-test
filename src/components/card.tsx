import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StandardStyles from '../styles/standard';

const styles = StyleSheet.create({
  card: {
    ...StandardStyles.borderRadius,
    padding: 40,
    backgroundColor: '#fff',
  },
  cardWrap: {
    flexGrow: 0,
    padding: 10,
    width: '50%',
  },
});

export default function Card(props: any) {
  return (
    <View style={styles.cardWrap}>
      <View style={[styles.card, StandardStyles.dropShadow]}>
        <Text>{props.children}</Text>
      </View>
    </View>
  );
}
