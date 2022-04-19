import { StyleSheet } from "react-native";
import { PublicStackScreenProps } from "../../types";
import { useStatusBar } from "../../hooks/useStatusBar";
import React from "react";
import { Button, Text, View } from "native-base";
import Logo from "../../components/Logo";
import LandingBackgroundImage from "../../components/LandingBackgroundImage";
import { primary } from "../../constants/Colors";

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

  return (
    <View
      style={{ ...styles.screenContainer, backgroundColor: '#fff' }}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
      >
        <LandingBackgroundImage />
      </View>

      <View style={{ ...styles.contentContainer }}>
        <Logo />
        <Button
          style={{ ...styles.button }}
          colorScheme="secondary"
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.text}>Get Started</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  contentContainer: {
    justifyContent: "space-between",
    flexDirection: "column",
    paddingVertical: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: "RobotoBold",
    fontSize: 19,
    color: "#fff",
  },
});
