import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { View } from "react-native";
import { persistStore } from "redux-persist";
import { store } from "./store/store";
import {
  extendTheme,
  NativeBaseProvider,
  StorageManager,
  ColorMode,
} from "native-base";
import React from "react";
import { primary } from "./constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

// create app presistor
const persistor = persistStore(store);

// Define the colorModeManager,
// here we are using react-native-async-storage (https://react-native-async-storage.github.io/async-storage/)
const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem("@color-mode");
      return val === "dark" ? "dark" : "light";
    } catch (e) {
      return "light";
    }
  },
  set: async (value: ColorMode) => {
    try {
      if(value) await AsyncStorage.setItem("@color-mode", value);
    } catch (e) {
      console.log(e);
    }
  },
};

export default function App() {
  const isLoadingComplete = useCachedResources();

  const theme = extendTheme({
    colors: {
      // set primary
      primary: {
        50: primary.shade_50,
        100: primary.shade_100,
        200: primary.shade_200,
        300: primary.shade_300,
        400: primary.shade_400,
        500: primary.shade_500,
        600: primary.shade_600,
        700: primary.shade_700,
        800: primary.shade_800,
        900: primary.shade_900,
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "light",
    },
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={<View />} persistor={persistor}>
          <StatusBar style="light" />
          <SafeAreaProvider>
            <NativeBaseProvider
              theme={theme}
              colorModeManager={colorModeManager}
            >
              <Navigation />
            </NativeBaseProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}
