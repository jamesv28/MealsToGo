import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList, StatusBar, StyleSheet } from "react-native";
import { Spacer } from "../components/spacer.component";
import { RestaurantInfoCard } from "../features/restaurants/restaurant-info-card.component";
import { RestaurantContext } from "../services/restaurant/restaurant.context";
import styled from "styled-components/native";

const RestaurantView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const InputWrapper = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchInput = styled(Searchbar)`
  borderradius: 0;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => {
  const [search, setSearch] = useState("");
  const restaurantContext = useContext(RestaurantContext);
  console.log(restaurantContext);
  return (
    <RestaurantView>
      <InputWrapper>
        <SearchInput
          placeholder="Search"
          onChangeText={setSearch}
          value={search}
        />
      </InputWrapper>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </RestaurantView>
  );
};
