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
import { primary, secondary } from "./constants/Colors";
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
      if (value) await AsyncStorage.setItem("@color-mode", value);
    } catch (e) {
      console.log(e);
    }
  },
};

export default function App() {
  const isLoadingComplete = useCachedResources();

  const theme = extendTheme({
    fontConfig: {
      Roboto: {
        300: {
          normal: "RobotoLight",
          italic: "RobotoLightItalic",
        },
        400: {
          normal: "RobotoRegular",
        },
        500: {
          normal: "RobotoMedium",
          italic: "RobotoMediumItalic",
        },
        700: {
          normal: "RobotoBold",
          italic: "RobotoBoldItalic",
        },
      },
    },
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
      // set secondary
      secondary: {
        50: secondary.shade_50,
        100: secondary.shade_100,
        200: secondary.shade_200,
        300: secondary.shade_300,
        400: secondary.shade_400,
        500: secondary.shade_500,
        600: secondary.shade_600,
        700: secondary.shade_700,
        800: secondary.shade_800,
        900: secondary.shade_900,
      },
    },
    components: {
      Text: {
        defaultProps: {
          size: "md",
          fontFamily: "RobotoRegular",
        },
        sizes: {
          xl: {
            fontSize: "64px",
          },
          lg: {
            fontSize: "32px",
          },
          md: {
            fontSize: "17px",
          },
          sm: {
            fontSize: "15px",
          },
        },
      },
      Heading: {
        defaultProps: {
          fontFamily: "RobotoBold",
        },
      },
      FormControlLabel: {
        baseStyle: {
          fontFamily: "RobotoBold",
        },
     
      },
    },
    config: {
      useSystemColorMode: true,
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
            <NativeBaseProvider theme={theme}>
              <Navigation />
            </NativeBaseProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}
