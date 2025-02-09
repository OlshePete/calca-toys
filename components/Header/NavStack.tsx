'use client'
import { ChildrenComponentProps } from '@/types'
import { HStack, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

function NavStack({children}:ChildrenComponentProps) {
  return (
    <HStack gap={'44px'} 
    style={{
    display:useBreakpointValue({base:'none', md:'inherit'}),
      textTransform:'uppercase',
      fontSize:'14px',
      fontWeight:400,
    }}>
      {children}
    </HStack>
  )
}

export default NavStack