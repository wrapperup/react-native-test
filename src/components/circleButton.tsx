import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';
import StandardStyles from '../styles/standard';

const styles = StyleSheet.create({
  circleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f00',
    borderRadius: 400,
    width: 50,
    height: 50,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default function CircleButton(props: any) {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log('hello');
    Animated.timing(bounceAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    } as any).start();
  }, [bounceAnim]);

  return (
    <TouchableOpacity style={[styles.circleButton, StandardStyles.dropShadow]}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
}
