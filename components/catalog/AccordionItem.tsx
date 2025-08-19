import {
  Accordion,
  AccordionItemProps,
} from '@chakra-ui/react';
import { FC, useCallback, useEffect, useState } from 'react';
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

  const handleValueChange = useCallback((newValue: string[]) => {
    onValueChange(paramName, newValue);
  }, [paramName, onValueChange]);

  useEffect(() => {
    const sortedProp = [...propValue].sort();
    setValue((prev) => {
      const prevSorted = [...prev].sort();
      const isEqual = JSON.stringify(prevSorted) === JSON.stringify(sortedProp);
      return isEqual ? prev : propValue;
    });
  }, [propValue]);

  const setValueAndNotify = useCallback((newValue: string[]) => {
    setValue(newValue);
    handleValueChange(newValue);
  }, [handleValueChange]);

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
        <CustomText visual="info_accordion_btn">
          {label}
        </CustomText>
        <Accordion.ItemIndicator />
      </Accordion.ItemTrigger>
      <Accordion.ItemContent p={4}>
        <CheckBoxGroup
          labels={variants}
          setValue={setValueAndNotify}
          value={value}
          paramName={paramName}
        />
      </Accordion.ItemContent>
    </Accordion.Item>
  );
};
export default AccordionItem;
