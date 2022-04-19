import React from "react";
import { Image } from "native-base";

export default function Logo() {
  return (
    <Image
      source={require("../assets/images/logos/logo-default.png")}
      alt="logo"
      size="md"
      width={230}
      resizeMode="contain"
    />
  );
}
