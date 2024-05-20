import React, { useState, useContext } from "react";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { FlatList, StatusBar } from "react-native";
import { Spacer } from "../components/spacer.component";
import { RestaurantInfoCard } from "../features/restaurants/restaurant-info-card.component";
import { RestaurantContext } from "../services/restaurant/restaurant.context";
import styled from "styled-components/native";

const RestaurantView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const LoadingView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
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
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  return (
    <RestaurantView>
      <InputWrapper>
        <SearchInput
          placeholder="Search"
          onChangeText={setSearch}
          value={search}
        />
      </InputWrapper>
      {isLoading && (
        <LoadingView>
          <Loading animating={true} size={50} />
        </LoadingView>
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </RestaurantView>
  );
};
