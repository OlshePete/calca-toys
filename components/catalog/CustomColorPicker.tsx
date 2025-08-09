import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import Text from '../../ui/Text/CustomText';
import CatalogColorPicker from '@components/ColorPicker/CatalogColorPicker';
interface ICustomColorPicker<K = string> extends Omit<BoxProps, 'onChange'> {
  colors: K[];
  activeColors: K[];
  onChange: (color: K) => void;
}
const CustomColorPicker: FC<ICustomColorPicker<string>> = ({
  colors,
  activeColors,
  onChange,
  ...props
}) => {
  return (
    <Box px={'10px'} {...props}>
      <Text visual="info_accordion_btn" mb={'20px'} ml={'-10px'}>
        Цвет
      </Text>
      <Box display={'flex'} flexWrap={'wrap'} gap={'13px'} rowGap={'20px'}>
        <CatalogColorPicker
          active={activeColors}
          colors={colors}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
};
export default CustomColorPicker;
