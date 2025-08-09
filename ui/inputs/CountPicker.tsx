import { HStack, IconButton, NumberInput } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';
function CountPicker({
  max,
  handler,
  current,
}: {
  max: number;
  handler: (v: number) => void;
  current: number;
}) {
  const [value, setValue] = useState<string>(String(current));

  useEffect(() => {
    if (+value !== current) handler(+value);
  }, [value]);

  useEffect(() => {
    setValue(String(current));
  }, [current]);

  return (
    <NumberInput.Root
      value={value}
      onValueChange={(e) => setValue(e.value)} unstyled spinOnPress={false}
      max={max}
    >
      <HStack gap="2">
        <NumberInput.DecrementTrigger asChild>
          <IconButton variant="outline" size="sm">
            <LuMinus />
          </IconButton>
        </NumberInput.DecrementTrigger>
        <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch" />
        <NumberInput.IncrementTrigger asChild>
          <IconButton variant="outline" size="sm">
            <LuPlus />
          </IconButton>
        </NumberInput.IncrementTrigger>
      </HStack>
    </NumberInput.Root>
  );
}

export { CountPicker };
