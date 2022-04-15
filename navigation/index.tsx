/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import ActivityLoader from "../components/ActivityLoader";
import { useAppSelector } from "../store/hooks";
import { getToken } from "../store/slices/userSessionSlice";
import LinkingConfiguration from "./LinkingConfiguration";
import PublicNavigator from "./Navigators/PublicNavigator";

/**
 * Root app Navigation
 *
 * If user session token exists, protected routes are
 * rendered. Otherwise the public routes are rendered
 * @param props
 * @returns
 */
export default function Navigation() {
  // get user session token
  const token = useAppSelector(getToken);

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <ActivityLoader />
      {/* {!isEmpty(token) ? <AuthedNavigator /> : <PublicNavigator />} */}
      <PublicNavigator />
    </NavigationContainer>
  );
}
