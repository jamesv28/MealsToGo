import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { Text, View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
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

const RestaurantContainer = styled.View`
  background-color: ${(props) => props.theme.colors.brand.secondary};
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

export const RestaurantScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <RestaurantView>
      <InputWrapper>
        <SearchInput
          placeholder="Search"
          onChangeText={setSearch}
          value={search}
        />
      </InputWrapper>
      <RestaurantContainer>
        <RestaurantInfoCard />
      </RestaurantContainer>
    </RestaurantView>
  );
};

const styles = StyleSheet.create({
  search: {
    borderRadius: 0,
  },
});
