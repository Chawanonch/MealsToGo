import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useUbuntu,
  Ubuntu_400Regular,
} from "@expo-google-fonts/ubuntu";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation/index";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  let [ubuntuLoaded] = useUbuntu({
    Ubuntu_400Regular,
  });

  let [lotoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!ubuntuLoaded || !lotoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
