import { Button, HStack, Icon, Input, useNumberInput, UseNumberInputProps } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
function HookUsage(props: UseNumberInputProps) {

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps, valueAsNumber } =
    useNumberInput(props);
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps()
  return (
    <HStack
      maxW="138px"
      borderRadius={"33px"}
      justifyContent={"space-between"}
      border={'2px solid #90BCE4'}
    >
      <Button {...dec} bg={"rgba(0,0,0,0)"} variant={"ghost"} p={"16px"}>
        <Icon width={"17px"} height={"2px"} viewBox={"0 0 17 2"} fill={"none"}>
          <path d="M1 1H16" stroke="#515151" strokeLinecap="round" />
        </Icon>
      </Button>
      <Input {...input} w={"43px"} border={"none"} p={0} textAlign={"center"} color={"brand.100"}/>
      <Button {...inc} bg={"rgba(0,0,0,0)"} variant={"ghost"}>
        <Icon
          width={"16px"}
          height={"16px"}
          viewBox={"0 0 16 16"}
          fill={"none"}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.56825 0.5C8.56825 0.223858 8.34439 0 8.06825 0C7.7921 0 7.56825 0.223858 7.56825 0.5V7.56841H0.5C0.223858 7.56841 0 7.79227 0 8.06841C0 8.34455 0.223858 8.56841 0.5 8.56841H7.56825V15.5C7.56825 15.7761 7.79211 16 8.06825 16C8.34439 16 8.56825 15.7761 8.56825 15.5V8.56841H15.5C15.7761 8.56841 16 8.34455 16 8.06841C16 7.79227 15.7761 7.56841 15.5 7.56841H8.56825V0.5Z"
            fill="#515151"
          />
        </Icon>
      </Button>
    </HStack>
  );
}
function CountPicker({ max, handler, current }: { max: number, handler: (v: number) => void, current: number }) {
  const props: UseNumberInputProps = {
    step: 1,
    defaultValue: current,
    min: 1,
    max: max,
  }
  const [value, setValue] = useState(current);

  useEffect(() => {
    if(value!==current) handler(value);
  }, [value]);

  useEffect(() => {
    setValue(current);
  }, [current]);

  return <><HookUsage
    value={value}
    onChange={(value, valueAsNumber) => { setValue(valueAsNumber>max?max:valueAsNumber) }}
    {...props}
  />
  </>
}

export { CountPicker };
