import { Icon, IconButton, IconButtonProps } from "@chakra-ui/react";
import { FC } from "react";
interface IProps extends IconButtonProps{
    format:'left'|'rigth'
}
const Arrow:FC<IProps> = ({format='left', ...props}) => {
    return <IconButton
        aria-label={`${format}-arrow`}
        {...props}
      >
        <Icon  boxSize="19px" viewBox="0 0 19 8">
          <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          {
            format === 'left'?
                <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976309 4.7308 0.659727 4.53553 0.464465C4.34027 0.269203 4.02369 0.269203 3.82843 0.464465L0.646446 3.64645ZM19 3.5L1 3.5L1 4.5L19 4.5L19 3.5Z" fill="#90BCE4" />:
                <path d="M18.3536 3.64645C18.5488 3.84171 18.5488 4.15829 18.3536 4.35355L15.1716 7.53553C14.9763 7.73079 14.6597 7.73079 14.4645 7.53553C14.2692 7.34027 14.2692 7.02369 14.4645 6.82843L17.2929 4L14.4645 1.17157C14.2692 0.976309 14.2692 0.659727 14.4645 0.464465C14.6597 0.269203 14.9763 0.269203 15.1716 0.464465L18.3536 3.64645ZM-4.37114e-08 3.5L18 3.5L18 4.5L4.37114e-08 4.5L-4.37114e-08 3.5Z" fill="#90BCE4" />
          }
          </svg>
        </Icon>
    </IconButton>
}
export default Arrow