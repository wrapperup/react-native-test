import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CircleButton from "./components/circleButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Animated.View>
        <CircleButton></CircleButton>
      </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
