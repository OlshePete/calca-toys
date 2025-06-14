import { Box, Button, ChakraProps, Text } from "@chakra-ui/react";
import { FC } from "react";
interface ICustomColorPicker<K = string> extends ChakraProps {
    colors: K[],
    activeColors: K[],
    onChange: (color: K) => void
}
const CustomColorPicker: FC<ICustomColorPicker<string>> = ({ colors, activeColors, onChange, ...props }) => {
    return (
        <Box px={'10px'}  {...props} >
            <Text variant="info_accordion_btn" mb={"20px"} ml={'-10px'}>Цвет</Text>
            <Box display={'flex'} flexWrap={'wrap'} gap={'13px'} rowGap={'20px'} >  {
                colors && colors.map((color, index) => {
                    return <Button
                        onClick={() => {
                            onChange(color)
                        }}
                        key={color + index}
                        bg={'#' + color}
                        sx={{
                            outline:activeColors.includes(color)? '1px solid #313131' : 'none',
                            padding: 0,
                            borderRadius: '100%',
                            minWidth: '23px!important',
                            height: '23px!important'
                        }}
                    />
                })
            }
            </Box>

        </Box>
    )
}
export default CustomColorPicker