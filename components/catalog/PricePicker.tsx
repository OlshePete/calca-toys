import {
  Box,
  Input,
  Flex,
  InputGroup,
} from '@chakra-ui/react';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import CustomText from '../../ui/Text/CustomText';
import { CustomSlider } from '../../ui/Sliders';

interface IPickerProps {
  min: number;
  max: number;
  limit: [number, number];
  setValue: (min: number, max: number) => void;
}

const PricePicker: FC<IPickerProps> = ({ min, max, limit, setValue }) => {
  const [sliderValues, setSliderValues] = useState<number[]>([min, max]);
  const [debouncedValues] = useDebounce<number[]>(sliderValues, 400);

  const handleSliderChange = useCallback((values: number[]) => {
    const clampedValues = [Math.min(values[0], limit[1]), Math.min(values[1], limit[1])];
    setSliderValues(clampedValues);
  },[limit, setSliderValues ]);

  const handleValueChange = useCallback((newValue: number[]) => {
    if (min !== sliderValues[0] || max !== sliderValues[1])
      setValue(newValue[0], newValue[1]);
  }, [min, max, sliderValues, setValue]);

  useEffect(() => {
    handleSliderChange([min, max])
  }, [min, max, handleSliderChange]);

  useEffect(() => {
    handleValueChange(debouncedValues)
  }, [debouncedValues, handleValueChange]);


  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(e.target.value, 10);
    if (!isNaN(newMin)) {
      const newValues = [Math.min(newMin, sliderValues[1], limit[1]), sliderValues[1]];
      setSliderValues(newValues);
    }
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value, 10);
    if (!isNaN(newMax)) {
      const newValues = [sliderValues[0], Math.min(newMax, limit[1])];
      setSliderValues(newValues);
    }
  };

  return (
    <Box px={'10px'}>
      <CustomText visual="info_accordion_btn" mb={'20px'} ml={'-10px'}>
        цена
      </CustomText>
      <CustomSlider
        value={sliderValues}
        min={0}
        max={limit[1]}
        onValueChange={(e) => handleSliderChange(e.value)}
      />
      <Flex justify="space-between" marginTop={'15px'} marginInline={'-10px'}>
        <InputGroup width="100px" startAddon="от" endAddon="₽" background={'transparent'}>
          <Input
            p={0}
            variant="outline"
            value={sliderValues[0]}
            onChange={handleMinInputChange}
            textAlign={'right'}
            pr={'1rem'}
            w={'fit-content'}
          />
        </InputGroup>
        <InputGroup width="100px" startAddon="до" endAddon="₽">
          <Input
            p={0}
            variant="outline"
            value={sliderValues[1]}
            onChange={handleMaxInputChange}
            textAlign={'right'}
            pr={'1rem'}
          />
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PricePicker;