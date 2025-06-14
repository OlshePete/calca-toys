'use client'
import { Box, BoxProps, StackProps } from '@chakra-ui/react'
import React, { FC, ReactNode } from 'react'
interface ICustomContactBoxProps extends BoxProps {
  children?:ReactNode,
  variant:''
}
const CustomContactBox:FC<ICustomContactBoxProps> = ({children, ...props}:ICustomContactBoxProps)=> {

  const variantStyles = (key:string):StackProps=>{
    switch (key) {
      case 'links':
        return {
          display:{base:'none',lg:'flex'}
        }
      case 'contacts':
        return {
          flexGrow:{ base:1, lg: 0}
        }
      default:
        return {}
    }
  }
  return (
    <Box 
      {...props}
    >
      {children}
    </Box>
  )
}

export default CustomContactBox