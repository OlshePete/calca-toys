'use client';
import { FC, useCallback, useEffect, useState } from 'react';
import { createListCollection, HStack, Portal, Select, StackProps, Text } from '@chakra-ui/react';

interface IProps extends Omit<StackProps, 'onChange'> {
  value: string;
  options: Record<string, string>;
  onChange: (newValue: string) => void;
}

const SortSelect: FC<IProps> = ({ value: pValue, options, onChange, ...props }) => {
  const frameworks = createListCollection({
    items: Object.entries(options).map(([value, label]) => ({ value, label }))
  })
  const [value, setValue] = useState<string[]>([pValue])
  
  const handleValueChange = useCallback((newValue: string[])=>{
    if (pValue !== newValue[0]) onChange(newValue[0])
  },[pValue, onChange])

  useEffect(() => {
    handleValueChange(value)
  }, [value, handleValueChange])
  return (
    <HStack
      minWidth={'280px'}
      w={'280px'}
      h={'22px'}
      alignItems={'flex-end'}
      gap={0}
      {...props}
    >
      <Text fontSize={'14px'} whiteSpace={'nowrap'}>
        Сортировать по:
      </Text>
      <Select.Root value={value} onValueChange={(e) => setValue(e.value)} collection={frameworks} flexGrow={1} height={'22px'} pl={'4px'}>
        <Select.HiddenSelect />
        <Select.Label display={'none'}>Сортировать по </Select.Label>
        <Select.Control height={'22px'} cursor={'pointer'}
        >
          <Select.Trigger asChild height={'22px'} padding={0} border={'none'} fontWeight={400} width={'fit-content'}>
            <Select.ValueText placeholder={options[value[0]]} minHeight={'22px'} fontWeight={'400!important'} whiteSpace={'nowrap'} color={'#595959'} />
          </Select.Trigger>
          <Select.IndicatorGroup padding={0}>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal >
          <Select.Positioner w={'fit-content!important'}>
            <Select.Content background={'brand.900'}>
              {frameworks.items.map((framework) => (
                <Select.Item asChild item={framework} key={framework.value} background={'brand.900'} >
                  <Text whiteSpace={'nowrap'} cursor={'pointer'}>
                    {framework.label}
                  </Text>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </HStack>
  );
};
export default SortSelect;
