import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorSchemeName } from "react-native";
import ModalScreen from "../../screens/ModalScreen";
import LoginScreen from "../../screens/public/LoginScreen";
import NotFoundScreen from "../../screens/shared/NotFoundScreen";
import { PublicStackParamList } from "../../types";
import BottomTabNavigator from "./BottomTabNavigator";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<PublicStackParamList>();

/**
 * Root navigator
 *
 * @returns
 */
export default function PublicNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
