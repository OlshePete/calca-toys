import { Icon, IconButton, IconButtonProps } from "@chakra-ui/react";
import { FC } from "react";
interface IProps extends IconButtonProps{
}
const ExpandArrow:FC<IProps> = ({ ...props}) => {
    return <IconButton
        {...props}
      >
     
                    <Icon width="16px" height="7px" viewBox="0 0 16 7" fill={'none'}>
                        <svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L8 6L15 1" stroke="#313131" stroke-linecap="round" />
                        </svg>
                    </Icon>
    </IconButton>
}
export default ExpandArrow