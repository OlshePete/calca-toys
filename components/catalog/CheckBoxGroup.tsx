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
    setIsAllSelected(value.length === labels.length);
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

  const handleAllChange = () => {
    if (isAllSelected) {
      setValue([]);
      setIsAllSelected(false);
    } else {
      setValue([...labels]);
      setIsAllSelected(true);
    }
  };

  return (
    <CCheckBoxGroup onChange={handleSetValue} value={value}>
      <Stack spacing={[1, 5]} direction={['column', 'column']}>
        {labels.map((item) => {
          const [firstLetter, ...label] = item;
          const disabled =
            !exeptDisable &&
            !(
              Object.keys(tags).includes(paramName) &&
              Object.values(tags)
                .flat()
                .map((t) => t.toLowerCase())
                .includes(item.toLowerCase())
            );
          return (
            <Checkbox key={item} value={item} disabled={disabled}>
              <Text>{firstLetter.toUpperCase() + label.join('')}</Text>
            </Checkbox>
          );
        })}
        {withAll && (
          <Checkbox key={allValue} isChecked={isAllSelected} onChange={handleAllChange}>
            <Text>{allValue}</Text>
          </Checkbox>
        )}
      </Stack>
    </CCheckBoxGroup>
  );
};

export default CheckBoxGroup;
