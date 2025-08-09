"use client"

import { FC } from "react";
import { ColorPicker as CColorPicker, Icon, Portal, parseColor,  } from "@chakra-ui/react"
import { LuCheck } from "react-icons/lu";

interface IProps {
    colors: string[],
    color:string | null,
    onChange:(color:string)=>void,
}
const ColorPicker: FC<IProps> = ({ colors, color, onChange }) => {
    if (!color) return null
    return (
        <CColorPicker.Root
            size="xs"
            defaultValue={parseColor(`#${color}`)}
            onValueChange={(e)=>{onChange(e.value.toString('hex').slice(1))}}
        >
            <CColorPicker.HiddenInput />
            <CColorPicker.Control>
                <CColorPicker.Trigger
                    border={'none'}
                    minW="60px"
                    minH="26px"
                    p={0}
                    justifyContent={'space-around'}
                    cursor={'pointer'}
                >
                    <CColorPicker.ValueSwatch borderRadius={'100%'}/>
                    <Icon width="16px" height="7px" viewBox="0 0 16 7" fill={'none'}>
                        <svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L8 6L15 1" stroke="#313131" stroke-linecap="round" />
                        </svg>
                    </Icon>
                </CColorPicker.Trigger>
            </CColorPicker.Control>
            <Portal>
                <CColorPicker.Positioner>
                    <CColorPicker.Content>
                        <CColorPicker.SwatchGroup>
                            {colors.map((item) => (
                                <CColorPicker.SwatchTrigger key={item} value={item}>
                                    <CColorPicker.Swatch value={parseColor(item)} borderRadius={'100%'}>
                                        <CColorPicker.SwatchIndicator>
                                            <LuCheck />
                                        </CColorPicker.SwatchIndicator>
                                    </CColorPicker.Swatch>
                                </CColorPicker.SwatchTrigger>
                            ))}
                        </CColorPicker.SwatchGroup>
                    </CColorPicker.Content>
                </CColorPicker.Positioner>
            </Portal>
        </CColorPicker.Root>
    )
}
export default ColorPicker