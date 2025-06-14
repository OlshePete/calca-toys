import { AccordionItem as CAccordionItem, AccordionButton, Text, Icon, AccordionPanel, AccordionItemProps } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import CheckBoxGroup from "./CheckBoxGroup";
interface IProps extends AccordionItemProps{
    label: string,
    paramName: string,
    variants:string[],
    propValue:string[],
    onValueChange:(type:string, newValue:string[])=>void
}
const AccordionItem: FC<IProps> = ({ label, paramName, variants, onValueChange, propValue, ...props }) => {
    
    const [value, setValue] = useState<string[]>(propValue)
    
    useEffect(()=>{
        setValue(prev=>JSON.stringify(prev.sort())!==JSON.stringify(propValue.sort())?propValue:prev)
    },[propValue])

    useEffect(()=>{
        onValueChange && onValueChange(paramName, value)
    },[value])

    return <CAccordionItem {...props} >
        {({ isExpanded }) => (
            <>
                <AccordionButton
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}
                    pl={0}
                    _hover={{
                        bg: '0,0,0,0'
                    }}
                >
                    <Text variant="info_accordion_btn" className={isExpanded ? "open" : ""}>{label}</Text>
                    <Icon width="19px" height="7px" viewBox="0 0 21 9" fill="none" transition={'all .2s ease-in-out'} transform={isExpanded ? 'rotate(180deg)' : 'rotate(0)'}>
                        <path
                            d="M1 1L10.5 8L20 1"
                            stroke="#313131"
                            strokeLinecap="round"
                        />
                    </Icon>
                </AccordionButton>
                <AccordionPanel p={4}>
                    <CheckBoxGroup
                        labels={variants}
                        setValue={setValue}
                        value={value}
                        paramName={paramName}
                    />
                </AccordionPanel>
            </>
        )}
    </CAccordionItem>
}
export default AccordionItem