"use client";
import { CustomButtonProps } from "@/types";
import { Button } from "@chakra-ui/react";
import React from "react";

function CustomButton({
  width = 200,
  height = 55,
  label,
  action = () => console.log("no handler to button " + label),
  variant,
}: CustomButtonProps) {
  return (
    <Button width={width} height={height} variant={variant} onClick={action}>
      {label.toUpperCase()}
    </Button>
  );
}

export default CustomButton;
