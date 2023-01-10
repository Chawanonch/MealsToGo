import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.search}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>

        <View style={{ flex: 1, padding: 16 ,backgroundColor: "#90d4d6"}}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    padding: 16,
    backgroundColor: "#73ca4e",
  },
});
