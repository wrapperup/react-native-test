import React, { Props, useEffect, useRef, useState } from "react";
import { StyleSheet, Animated, TouchableOpacity, Text } from "react-native";

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: "#000",
    borderRadius: 400,
    width: 50,
    height: 50,
  },
});

export default function CircleButton(props: any) {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log("hello");
    Animated.timing(bounceAnim, {
      toValue: 1,
      duration: 5000,
    } as any).start();
  }, [bounceAnim]);

  return (
    <TouchableOpacity style={styles.circleButton}>
      <Text>+</Text>
    </TouchableOpacity>
  );
}
