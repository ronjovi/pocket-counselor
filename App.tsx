import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { View } from "react-native";
import { persistStore } from "redux-persist";
import { store } from "./store/store";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";

// create app presistor
const persistor = persistStore(store);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
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
            <NativeBaseProvider theme={theme}>
              <Navigation colorScheme={colorScheme} />
            </NativeBaseProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}
