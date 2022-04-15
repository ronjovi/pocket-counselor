import { StyleSheet, Dimensions } from "react-native";
import { AuthedStackScreenProps, PublicStackScreenProps } from "../../types";
import { useStatusBar } from "../../hooks/useStatusBar";
import React from "react";
import { View } from "native-base";

interface IProps {
  navigation:
    | PublicStackScreenProps<"NotFound">
    | AuthedStackScreenProps<"NotFound">;
}

/**
 * Renders the login screen. Users can enter their account
 * email and password in order to access their account
 * @param param0
 * @returns
 */
export default function LoginScreen({ navigation }: IProps) {
  // update status bar to use dark mode
  useStatusBar("dark-content");

  // get window width and height
  const { width, height } = Dimensions.get("window");

  const onStateChange = (val: any) => {
    console.log(val);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          height: height / 3,
          justifyContent: "flex-end",
          backgroundColor: "transparent",
          paddingBottom: 50,
        }}
      ></View>
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
    backgroundColor: "#fff",
    height: 65,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#00101b",
    fontSize: 21,
    fontFamily: "RobotoMedium",
  },
});
