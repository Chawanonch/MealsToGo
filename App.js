import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useUbuntu,
  Ubuntu_400Regular,
} from "@expo-google-fonts/ubuntu";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

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
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
