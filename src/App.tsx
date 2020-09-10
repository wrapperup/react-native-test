import registerRootComponent from 'expo/build/launch/registerRootComponent';
import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Card from './components/card';
import CardContainer from './components/cardContainer';
import CircleButton from './components/circleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Animated.View style={styles.appWrap}>
        <CardContainer>
          <Card>asfasnfaskfk</Card>
          <Card>asfasnfaskfk</Card>
          <Card>asfasnfaskfk</Card>
          <Card>asfasnfaskfk</Card>
          <Card>asfasnfaskfk</Card>
          <Card>asfasnfaskfk</Card>
          <Card>asfasnfaskfk</Card>
          <Card>asfasnfaskfk</Card>
          <Card>asfasnfaskfk</Card>
        </CardContainer>
        <CircleButton />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  appWrap: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

registerRootComponent(App);
