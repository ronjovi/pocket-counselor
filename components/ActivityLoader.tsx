import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useAppSelector } from "../store/hooks";
import { getIsLoadingApp } from "../store/slices/appSlice";



/**
 * Renders full page loader that prevents the user
 * from performing additional actions
 * @returns
 */
const ActivityLoader = () => {
  // get app loading state
  const isLoading = useAppSelector(getIsLoadingApp);


  return (
    <View style={isLoading ? styles.spinner:null}>
      {isLoading ? <ActivityIndicator color="#fff" /> : <View />}
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 99,
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.3)",
  },
});

export default ActivityLoader;
