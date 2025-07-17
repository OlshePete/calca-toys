'use client';
import { createListCollection, HStack, Portal, Select, StackProps, Text } from '@chakra-ui/react';
import { ChangeEventHandler, FC, useEffect, useState } from 'react';

interface IProps extends Omit<StackProps, 'onChange'> {
  value: string;
  options: Record<string, string>;
  onChange: (newValue: string) => void;
}

const SortSelect: FC<IProps> = ({ value: pValue, options, onChange, ...props }) => {
  const frameworks = createListCollection({
    items: Object.entries(options).map(([value, label]) => ({ value, label }))
  })
  const [value, setValue] = useState<string[]>([])
  useEffect(() => {
    console.log('value', value)
  }, [value])
  // const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
  //   const newValue = e.target.value as typeof value;
  //   onChange(newValue);
  // };
  return (
    <HStack {...props}>
      <Text fontSize={'14px'} whiteSpace={'nowrap'}>
        Сортировать по:
      </Text>
       <Select.Root  collection={frameworks} width={'80px'} outline={'1px solid red'}>
            <Select.HiddenSelect />
            <Select.Label>size </Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select framework" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {frameworks.items.map((framework) => (
                    <Select.Item item={framework} key={framework.value}>
                      {framework.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
      {/* <Select.Root
        collection={frameworks}
        value={value}
        onValueChange={(e) => setValue(e.value)}
        width="140px"
        outline={'1px solid red'}
        style={{
          // padding: '4px',
          // width: '100px',
          // fontWeight: 300,
          height: '24px',
          // // background: 'red'
        }}
      >
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText/>
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {frameworks.items.map((framework) => {
                return (
                  <Select.Item
                    key={value + '#' + framework.label}
                    item={framework}
                    style={{
                      fontWeight: 300,
                    }}
                  >
                    {framework.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                );
              })}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root> */}
    </HStack>
  );
};
export default SortSelect;
