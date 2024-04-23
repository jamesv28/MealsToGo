import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon = "",
    photos = [
      "https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzExNzAsNTgzXQ.jpg",
    ],
    address = "paper street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />
      <Text>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 16,
  },
});
