import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { Text, View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={{ padding: 16 }}>
        <Searchbar
          style={styles.search}
          placeholder="Search"
          onChangeText={setSearch}
          value={search}
        />
      </View>
      <View style={{ backgroundColor: "blue", padding: 16, flex: 1 }}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    borderRadius: 0,
  },
});
