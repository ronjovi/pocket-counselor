import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../../screens/public/LandingScreen";
import LoginScreen from "../../screens/public/LoginScreen";
import NotFoundScreen from "../../screens/shared/NotFoundScreen";
import { PublicStackParamList } from "../../types";

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
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Root"
        component={LandingScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Signup"
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
