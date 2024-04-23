import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { RestaurantScreen } from "./src/screens/restaurant.screen";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
