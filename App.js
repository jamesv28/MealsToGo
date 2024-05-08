import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { RestaurantScreen } from "./src/screens/restaurant.screen";
import { SettingsScreen } from "./src/screens/settings.screen";
import { MapsScreen } from "./src/screens/map.screen";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts as merriFonts,
  Merriweather_400Regular,
} from "@expo-google-fonts/merriweather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { restaurantRequest } from "./src/services/restaurant/restaurant.service";
const TAB_ICON = {
  Restaurants: "restaurant",
  Settings: "settings",
  Map: "map",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
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

  const Tab = createBottomTabNavigator();

  console.log("hello");
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "#BF40BF",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={MapsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
