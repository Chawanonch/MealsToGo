import { useState } from "react";
import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const Search = styled.View`
  padding: 16px;
  background-color: #5281ee;
`;

const List = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #90d4d6;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <Search>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </Search>
      <List>
        <RestaurantInfoCard />
      </List>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
});
