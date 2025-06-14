'use client'
import { ChildrenComponentProps } from '@/types'
import { HStack, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

interface INavStackProps extends ChildrenComponentProps {}
function NavStack({ children }: INavStackProps) {
  return (
    <HStack 
    gap={'44px'}
      style={{
        textTransform: 'uppercase',
        fontSize: '14px',
        fontWeight: 400,
        position:"relative"
      }}>
     {children}
    </HStack>
  )
}

export default NavStack;