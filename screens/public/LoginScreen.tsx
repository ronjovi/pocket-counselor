import { StyleSheet, Image, Dimensions } from "react-native";

import { Text, View } from "../../components/Themed";
import { AuthedStackScreenProps, PublicStackScreenProps } from "../../types";
import useColorScheme from "../../hooks/useColorScheme";
import { useStatusBar } from "../../hooks/useStatusBar";

/**
 * Renders the login screen. Users can enter their account
 * email and password in order to access their account
 * @param param0
 * @returns
 */
export default function LoginScreen({
  navigation,
}: PublicStackScreenProps<"NotFound"> | AuthedStackScreenProps<"NotFound">) {
  // update status bar to use dark mode
  useStatusBar("dark-content");
  
  // get window width and height
  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <View style={{ ...StyleSheet.absoluteFillObject }}>
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
        <View style={styles.button}>
          <Text style={styles.text}>Get Started</Text>
        </View>
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
    backgroundColor: "#219A9A",
    height: 65,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 19,
    fontFamily: "RobotoMedium",
  },
});
