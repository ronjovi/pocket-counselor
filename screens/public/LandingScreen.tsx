import { StyleSheet, Image, Dimensions } from "react-native";

import { View } from "../../components/Themed";
import { AuthedStackScreenProps, PublicStackScreenProps } from "../../types";
import useColorScheme from "../../hooks/useColorScheme";
import { useStatusBar } from "../../hooks/useStatusBar";
import React, { useState } from "react";
import { TapGestureHandler, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Text } from "native-base";

/**
 * Renders the login screen. Users can enter their account
 * email and password in order to access their account
 * @param param0
 * @returns
 */
export default function LandingScreen({
  navigation,
}: PublicStackScreenProps<"Root">) {

  // update status bar to use dark mode 
  useStatusBar("dark-content");

  // get window width and height
  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
      >
        <Image
          source={require("../../assets/images/login/login-background.png")}
          style={styles.image}
        />
      </View>

      <View
        style={{
          height: height / 3,
          justifyContent: "flex-end",
          backgroundColor: "transparent",
          paddingBottom: 50,
        }}
      >

        <Button  style={styles.button} onPress={() => navigation.navigate("Login")}
        >
          <Text>SIGN IN</Text>
        </Button>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  button: {
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {

  },
});
