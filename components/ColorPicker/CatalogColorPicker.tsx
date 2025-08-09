"use client"

import { FC } from "react";
import { ColorPicker as CColorPicker, parseColor } from "@chakra-ui/react"

interface IProps {
    colors: string[],
    active: string[],
    onChange: (color: string) => void,
}
const CatalogColorPicker: FC<IProps> = ({ colors, active, onChange }) => {
    return (
        <>
            {colors.map((rawItem) => {
                const item = parseColor('#' + rawItem)
                return (
                    <CColorPicker.Root
                        key={rawItem}
                        size="xs"
                        value={active.includes(rawItem) ? item : undefined}
                        onValueChange={(e) => onChange(e.value.toString('hex').slice(1))}
                        onClick={(() => active.includes(rawItem) ? onChange(rawItem) : undefined)}
                    >
                        <CColorPicker.HiddenInput />
                        <CColorPicker.Control gap={0} justifyContent={'flex-start'}>
                            <CColorPicker.SwatchTrigger
                                value={item}
                                key={rawItem}
                                border={'none'}
                                minH="26px"
                                p={0}
                                justifyContent={'space-around'}
                                cursor={'pointer'}
                                borderRadius={'100%'}
                                minWidth={'26px'} width={'26px'} height={'26px'}
                            >
                                <CColorPicker.Swatch value={item}
                                    borderRadius={'100%'} width={'26px'} height={'26px'}>
                                    <CColorPicker.SwatchIndicator boxSize="3" bg="white" />
                                </CColorPicker.Swatch>
                            </CColorPicker.SwatchTrigger >
                        </CColorPicker.Control>
                    </CColorPicker.Root>

                )
            })
            }
        </>

    )
}
export default CatalogColorPicker