import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantScreen } from "./src/screens/restaurant.screen";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import {
  useFonts as merriFonts,
  Merriweather_400Regular,
} from "@expo-google-fonts/merriweather";

export default function App() {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });

  let [merriLoaded] = merriFonts({
    Merriweather_400Regular,
  });

  if (!fontsLoaded || !merriLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
