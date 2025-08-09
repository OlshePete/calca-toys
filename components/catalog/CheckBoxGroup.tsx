'use client';
import {
  CheckboxGroup as CCheckBoxGroup,
  Checkbox,
  CheckboxGroupProps,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FC, useState, useEffect } from 'react';
import { useAvailableSettings } from '../context/useAvailableSettings';

function checkItem(
  item: string,
  tagList: Record<string, string[]>,
  currentTag: string,
  exeptDisable: boolean
): boolean {
  return !exeptDisable &&
    !(
      (currentTag in tagList) &&
      Object.values(tagList)
        .flat()
        .some(t => t.toLowerCase() === item.toLowerCase())
    );
}
interface ICheckBoxProps extends CheckboxGroupProps {
  labels: string[];
  value: string[];
  paramName: string;
  withAll?: boolean;
  setValue: (newValue: string[]) => void;
}

const allValue = 'Все';
const CheckBoxGroup: FC<ICheckBoxProps> = ({
  labels,
  value,
  paramName,
  withAll = true,
  setValue,
}) => {
  const { tags } = useAvailableSettings();
  const exeptDisable = ['material', 'specials'].includes(paramName);
  const [isAllSelected, setIsAllSelected] = useState(false);

  useEffect(() => {
    if(window) {

      const res = value.filter(item=>!checkDisable(item))
      console.log('ressss', value ,paramName, res)
      setIsAllSelected(res.length  === labels.length);
    }
  }, [value, labels]);

  const handleSetValue = (newValue: string[]) => {
    const hasAll = newValue.includes(allValue);

    if (hasAll) {
      setValue([...labels]);
      setIsAllSelected(true);
    } else {
      setValue(newValue.filter((v) => v !== allValue));
      setIsAllSelected(false);
    }
  };
  const checkDisable = (item:string) => checkItem(item, tags, paramName, exeptDisable)

  const handleAllChange = () => {
    if (isAllSelected) {
      setValue([]);
      setIsAllSelected(false);
    } else {
      setValue([...labels.filter(item=>!checkDisable(item))]);
      setIsAllSelected(true);
    }
  };

  return (
    <CCheckBoxGroup onValueChange={handleSetValue} value={value}>
      <Stack 
      // spacing={[1, 5]}
      direction={['column', 'column']}>
        {labels.map((item) => {
          const [firstLetter, ...label] = item;
          return (
            <Checkbox.Root key={item} value={item} disabled={checkDisable(item) && !value.includes(item)}>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label asChild>
                <Text>{firstLetter.toUpperCase() + label.join('')}</Text>
              </Checkbox.Label>
            </Checkbox.Root>
          );

        })}
        {withAll && (
          <Checkbox.Root key={allValue} checked={isAllSelected} onChange={handleAllChange}>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label asChild>
                <Text>{allValue}</Text>
              </Checkbox.Label>
          </Checkbox.Root>
        )}
      </Stack>
    </CCheckBoxGroup>
  );
};

export default CheckBoxGroup;
