import { StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../components/Themed";
import { AuthedStackScreenProps, PublicStackScreenProps } from "../../types";

/**
 * Renders not found screen. Users can click on the go to home
 * button in order to return to root route in the navigator
 * @param param0 
 * @returns 
 */
export default function NotFoundScreen({
  navigation,
}: PublicStackScreenProps<"NotFound">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Root")}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
