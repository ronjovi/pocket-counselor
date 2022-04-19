import React from "react";
import { Image } from "native-base";
import { StyleSheet } from "react-native";

export default function LandingBackgroundImage() {
  return (
    <Image
      source={require("../assets/images/login/login-background.png")}
      style={styles.image}
      alt="background"
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
