"use client";
import { CustomTextProps } from "@/types";
import { Text } from "@chakra-ui/react";
import React from "react";

function CustomText({
  children,
  color = "brand.200",
  fontSize = 14,
  ...otherProps
}: CustomTextProps) {
  return (
    <Text
      {...otherProps}
    >
      {children}
    </Text>
  );
}

export default CustomText;
