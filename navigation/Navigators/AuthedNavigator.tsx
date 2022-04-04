import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModalScreen from "../../screens/ModalScreen";
import NotFoundScreen from "../../screens/shared/NotFoundScreen";
import { AuthedStackParamList } from "../../types";
import BottomTabNavigator from "./BottomTabNavigator";

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<AuthedStackParamList>();

/**
 * Root navigator
 *
 * @returns
 */
export default function AuthedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
