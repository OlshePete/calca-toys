"use client";
import { lato } from "@/app/providers";
import { CustomTextProps } from "@/types";
import { Text } from "@chakra-ui/react";
import React from "react";

function CustomText({
  children,
  color = "inherit",
  fontSize = 14,
  style={}
}: CustomTextProps) {
  return (
    <Text
      color={color}
      fontSize={fontSize + "px"}
      margin={0}
      lineHeight={fontSize + "px"}
      fontFamily={lato?.style.fontFamily}
      style={style}
    >
      {children}
    </Text>
  );
}

export default CustomText;
