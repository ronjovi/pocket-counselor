import { Platform, StyleSheet } from "react-native";

import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  KeyboardAvoidingView,
  Text,
  View,
  VStack,
} from "native-base";

interface IProps {
  color: string;
  children: any;
}
export default function FormLabel({ color, children }: IProps) {
  return (
    <FormControl.Label
      _text={{ color: color, fontFamily: "RobotoMedium", fontSize: "16px" }}
    >
      {children}
    </FormControl.Label>
  );
}
