import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { StatusBar, StatusBarStyle } from "react-native";

/**
 * Updates the status bar theme
 * @param style 
 */
export const useStatusBar = (style: StatusBarStyle) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(style);
    }, [])
  );
};
