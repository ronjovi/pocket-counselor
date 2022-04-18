import { StyleSheet, Image, Dimensions } from "react-native";
import { PublicStackScreenProps } from "../../types";
import { useStatusBar } from "../../hooks/useStatusBar";
import React from "react";
import {
  Button,
  Text,
  useColorMode,
  useColorModeValue,
  View,
} from "native-base";

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

  const colorMode = useColorMode();

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
        
          height: height / 2.8,
          justifyContent: "flex-start",
          backgroundColor: "red",
          flexDirection: 'column',
          paddingBottom: 50,
          display: 'flex'
        }}
      >
        <Button
          size="lg"
          _light={{ bg: "#fff", _pressed: {bg: 'secondary.500'},}}
          _dark={{ bg: "secondary.500" }}
        
          onPress={() => {
            console.log("hi");
          }}
        >
          <Text style={styles.text}>Get Started</Text>
        </Button>

        <Button
          size="sm"
          _light={{ bg: "secondary.500" }}
          _dark={{ bg: "secondary.500" }}
          style={{flex: '0 0 10'}}
          onPress={() => {
            console.log("hi");
          }}
        >
          <Text style={styles.text}>Get Started</Text>
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
    color: "#fff",
    fontSize: 17,
  },
});
