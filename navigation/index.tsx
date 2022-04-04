/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import ActivityLoader from "../components/ActivityLoader";
import { isEmpty } from "../helpers/Regex";
import { useAppSelector } from "../store/hooks";
import { getToken } from "../store/slices/userSessionSlice";
import LinkingConfiguration from "./LinkingConfiguration";
import AuthedNavigator from "./Navigators/AuthedNavigator";
import RootNavigator from "./Navigators/AuthedNavigator";
import PublicNavigator from "./Navigators/PublicNavigator";

interface IProps {
  colorScheme: ColorSchemeName;
}

/**
 * Root app Navigation
 *
 * If user session token exists, protected routes are
 * rendered. Otherwise the public routes are rendered
 * @param props
 * @returns
 */
export default function Navigation(props: IProps) {
  const { colorScheme } = props;

  // get user session token
  const token = useAppSelector(getToken);

  console.log(`color scheme: ${colorScheme}`);
  console.log(`user session token: ${token}`);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <ActivityLoader />
      {!isEmpty(token) ? <AuthedNavigator /> : <PublicNavigator />}
    </NavigationContainer>
  );
}
