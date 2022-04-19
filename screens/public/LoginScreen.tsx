import { Platform, StyleSheet } from "react-native";
import { PublicStackScreenProps } from "../../types";
import { useStatusBar } from "../../hooks/useStatusBar";
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
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import Logo from "../../components/Logo";
import { Link } from "@react-navigation/native";
import FormLabel from "../../components/FormLabel";
import { useHeaderHeight } from "@react-navigation/elements";

const topOffset = 50;
/**
 * Renders the login screen. Users can enter their account
 * email and password in order to access their account
 * @param param0
 * @returns
 */
export default function LoginScreen({
  navigation,
}: PublicStackScreenProps<"Login">) {
  // update status bar to use dark mode
  useStatusBar("dark-content");

  const headerHeight = useHeaderHeight();

  return (
    <View style={styles.screenContainer}>
      <VStack
        mt={topOffset}
        pl={5}
        pr={5}
        flex="1"
        justifyContent="space-between"
        w="100%"
      >
        <View>
          <Logo />
        </View>
        <Center flex={1} px="3">
          <KeyboardAvoidingView
            h={{
              base: "200px",
              lg: "auto",
            }}
            keyboardVerticalOffset={topOffset + 40}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            flex="1"
            w="100%"
          >
            <Center flex="1" w="100%">
              <VStack justifyContent="flex-end" w="100%">
                <Heading color={"coolGray.900"} size="lg" mb="3">
                  Welcome
                </Heading>

                <Input placeholder="Email Address" mt="10" mb="4" />
                <Button mb="4">Proceed</Button>
              </VStack>
            </Center>
          </KeyboardAvoidingView>
        </Center>
      </VStack>

      {/* <Center flex={1} px="3">
        <Logo />
        <KeyboardAvoidingView
          h={{
            base: "600px",
            lg: "auto",
          }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, backgroundColor: 'red' }}
        >
          <VStack mt={50} ml={5} flex="1" justifyContent="flex-end" w="100%">
            <Heading color={"coolGray.400"} size="lg" mb="3">
              Welcome
            </Heading>

            <Input placeholder="Email Address" mt="10" mb="4" />
            <Button mb="4">Proceed</Button>
          </VStack>
        </KeyboardAvoidingView>
      </Center> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: "RobotoBold",
    fontSize: 19,
    color: "#fff",
  },
});
