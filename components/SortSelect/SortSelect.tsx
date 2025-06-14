"use client";
import { TSortVariants } from "@/types/api";
import { HStack, Select, StackProps, Text } from "@chakra-ui/react";
import { ChangeEventHandler, FC } from "react";

interface IProps extends Omit<StackProps,'onChange'> {
    value: string,
    options: Record<string, string>,
    onChange: (newValue: string) => void,
}

const SortSelect: FC<IProps> = ({ value, options, onChange, ...props }) => {
    const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
        const newValue = e.target.value as typeof value;
        onChange(newValue);
    };
    return (
        <HStack {...props}>
            <Text fontSize={'14px'} whiteSpace={'nowrap'}>Сортировать по:</Text>
            <Select variant='unstyled' value={value} onChange={handleChange} style={{
                padding: '4px',
                width: '100px',
                fontWeight: 300,
            }}>
                {
                    Object.entries(options).map(([value,label]) => {
                       return <option key={value+'#'+label} value={value} style={{
                            fontWeight: 300,
                        }}>{label}</option>
                    })
                }
            </Select>
        </HStack>
    );
}
export default SortSelect