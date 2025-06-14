import {
    Box,
    RangeSlider,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    RangeSliderTrack,
    Tooltip,
    Input,
    Flex,
    InputGroup,
    InputLeftAddon,
    InputRightElement,
    Text,
} from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

interface IPickerProps {
    min: number;
    max: number;
    limit: [number, number];
    setValue: (min: number, max: number) => void;
}

const PricePicker: FC<IPickerProps> = ({ min, max, limit, setValue }) => {
    const [sliderValues, setSliderValues] = useState<number[]>([min, max]);
    const [activeThumbIndex, setActiveThumbIndex] = useState<number | null>(null);

    const [debouncedValues] = useDebounce<number[]>(sliderValues, 400); 

    useEffect(() => {
        if(min!==sliderValues[0] || max!==sliderValues[1])
            setValue(debouncedValues[0], debouncedValues[1]);
    }, [debouncedValues, setValue]);

    const handleSliderChange = (values: number[]) => {
        const clampedValues = [
            Math.min(values[0], limit[1]),
            Math.min(values[1], limit[1]),
        ];
        setSliderValues(clampedValues);
    };

   
    const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMin = parseInt(e.target.value, 10);
        if (!isNaN(newMin)) {
            const newValues = [
                Math.min(newMin, sliderValues[1], limit[1]),
                sliderValues[1],
            ];
            setSliderValues(newValues);
        }
    };

   
    const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newMax = parseInt(e.target.value, 10);
        if (!isNaN(newMax)) {
            const newValues = [
                sliderValues[0],
                Math.min(newMax, limit[1]),
            ];
            setSliderValues(newValues);
        }
    };

    return (
        <Box px={'10px'}>
       <Text variant="info_accordion_btn" mb={"20px"} ml={'-10px'}>цена</Text>

            <RangeSlider
                aria-label={['min', 'max']}
                value={sliderValues}
                min={0}
                max={limit[1]}
                colorScheme="#90BCE4"
                onChange={handleSliderChange}
                onMouseEnter={() => setActiveThumbIndex(0)}
                onMouseLeave={() => setActiveThumbIndex(null)}
                mb={"15px"}
                sx={{
                    "& .chakra-slider__track": {
                        height: "4px", // Толщина полоски
                        backgroundColor: "#E2E8F0", // Цвет фона полоски
                    },
                    "& .chakra-slider__filled-track": {
                        backgroundColor: "#90BCE4", // Цвет заполненной части полоски
                    },
                    "& .chakra-slider__thumb": {
                        width: "16px", // Ширина бегунка
                        height: "16px", // Высота бегунка
                        backgroundColor: "#FEF7E6", // Цвет фона бегунка
                        border: "4px solid #F49AA5", // Граница бегунка
                        boxShadow: "md", // Тень для бегунка
                        _focus: {
                            boxShadow: "none", // Тень при фокусе
                        },
                    },
                }}
            >
                <RangeSliderTrack
                >
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                {sliderValues.map((value, index) => (
                    <Tooltip
                        hasArrow
                        bg="#F49AA5"
                        color="white"
                        placement="top"
                        isOpen={activeThumbIndex === index}
                        label={`${value}`}
                        key={index}
                    >
                        <RangeSliderThumb
                            index={index}
                            onMouseEnter={() => setActiveThumbIndex(index)}
                            onMouseLeave={() => setActiveThumbIndex(null)}
                        />
                    </Tooltip>
                ))}
            </RangeSlider>

            <Flex justify="space-between" >
                <InputGroup width="100px" >
                    <InputLeftAddon position={'absolute'} children="от" bg={'transparent'} borderRight={0}  p={'0 8px 0 8px'} />
                    <Input
                        p={0}
                        variant="outline"
                        value={sliderValues[0]}
                        onChange={handleMinInputChange}
                        textAlign={'right'}
                        pr={'1rem'}
                        w={'fit-content'}
                    />
                    <InputRightElement width="1rem" pointerEvents="none" p={0}>
                        ₽
                    </InputRightElement>
                </InputGroup>
                <InputGroup width="100px">
                    <InputLeftAddon position={'absolute'} children="до" bg={'transparent'} borderRight={0}  p={'0 8px 0 8px'} />
                    <Input
                        p={0}
                        variant="outline"
                        value={sliderValues[1]}
                        onChange={handleMaxInputChange}
                        textAlign={'right'}
                        pr={'1rem'}
                    />
                    <InputRightElement width="1rem" pointerEvents="none" p={0}>
                        ₽
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Box>
    );
};

export default PricePicker;