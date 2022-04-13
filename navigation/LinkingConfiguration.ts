/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { PublicStackParamList } from '../types';

const linking: LinkingOptions<PublicStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: 'root',
      Login: 'login',
      Signup: 'signup',
      NotFound: '*',
    },
  },
};

export default linking;
