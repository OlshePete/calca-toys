"use client";
import { CustomTextProps } from "@/types";
import { Text } from "@chakra-ui/react";
import React from "react";

function CustomText({
  children,
  color = "inherit",
  fontSize = 14,
}: CustomTextProps) {
  return (
    <Text
      color={color}
      fontSize={fontSize + "px"}
      margin={0}
      lineHeight={fontSize + "px"}
    >
      {children}
    </Text>
  );
}

export default CustomText;
