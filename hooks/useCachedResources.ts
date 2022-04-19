import { FontAwesome } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Image } from "react-native";

/**
 * Map through each image,
 * if the imager is a local url/remote url, prefetch image
 * if image is local image import
 * @param images
 * @returns
 */
function cacheImages(images: string[] | number[]) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

/**
 * Preload local fonts
 * @param fonts
 * @returns
 */
function cacheFonts(fonts: string[] | Record<string, Font.FontSource>[]) {
  return fonts.map((font) => Font.loadAsync(font));
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        const imageAssets = cacheImages([
          require("../assets/images/login/login-background.png"), // login image
        ]);

        const fontAssets = cacheFonts([
          FontAwesome.font,
          { RobotoThin: require("../assets/fonts/Roboto-Light.ttf") },
          { RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf") },
          { RobotoBold: require("../assets/fonts/Roboto-Bold.ttf") },
          { RobotoThinItalic: require("../assets/fonts/Roboto-LightItalic.ttf") },
          { RobotoMediumItalic: require("../assets/fonts/Roboto-MediumItalic.ttf") },
          { RobotoBoldItalic: require("../assets/fonts/Roboto-BoldItalic.ttf") },
          { RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf") },
        ]);

        await Promise.all([...imageAssets, ...fontAssets]);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
