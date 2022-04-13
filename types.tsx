/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface AuthedParamList extends AuthedStackParamList {}
    interface PublicParamList extends PublicStackParamList {}
  }
}

export type AuthedStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type AuthedStackScreenProps<Screen extends keyof AuthedStackParamList> =
  NativeStackScreenProps<AuthedStackParamList, Screen>;

export type PublicStackParamList = {
  Root: undefined;
  Login: undefined;
  Signup: undefined;
  NotFound: undefined;
};

export type PublicStackScreenProps<Screen extends keyof PublicStackParamList> =
  NativeStackScreenProps<PublicStackParamList, Screen>;

// export type RootTabParamList = {
//   TabOne: undefined;
//   TabTwo: undefined;
// };

// export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
//   CompositeScreenProps<
//     BottomTabScreenProps<RootTabParamList, Screen>,
//     NativeStackScreenProps<RootStackParamList>
//   >;
