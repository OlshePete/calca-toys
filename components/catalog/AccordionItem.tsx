import {
  Accordion,
  AccordionItemProps,
} from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import CheckBoxGroup from './CheckBoxGroup';
import CustomText from '../../ui/Text/CustomText';
interface IProps extends AccordionItemProps {
  label: string;
  paramName: string;
  variants: string[];
  propValue: string[];
  onValueChange: (type: string, newValue: string[]) => void;
}
const AccordionItem: FC<IProps> = ({
  label,
  paramName,
  variants,
  onValueChange,
  propValue,
  value: prVAlue,
  ...props
}) => {
  const [value, setValue] = useState<string[]>(propValue);
  useEffect(() => {
    setValue((prev) =>
      JSON.stringify(prev.sort()) !== JSON.stringify(propValue.sort()) ? propValue : prev
    );
  }, [propValue]);

  useEffect(() => {
    onValueChange && onValueChange(paramName, value);
  }, [value]);

  return (
    <Accordion.Item value={paramName} {...props}>
      <Accordion.ItemTrigger
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={4}
        pl={0}
        _hover={{
          bg: '0,0,0,0',
        }}
      >
        <CustomText visual="info_accordion_btn"
        >
          {label}
        </CustomText>
        <Accordion.ItemIndicator />
      </Accordion.ItemTrigger>
      <Accordion.ItemContent p={4}>
        <CheckBoxGroup
          labels={variants}
          setValue={setValue}
          value={value}
          paramName={paramName}
        />
      </Accordion.ItemContent>
    </Accordion.Item>
  );
};
export default AccordionItem;
