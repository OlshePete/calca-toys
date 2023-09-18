'use client'
import { ChildrenComponentProps } from '@/types'
import { HStack } from '@chakra-ui/react'
import React from 'react'

function NavStack({children}:ChildrenComponentProps) {
  return (
    <HStack gap={'44px'} style={{
      textTransform:'uppercase',
      fontSize:'14px',
      fontWeight:400,
    }}>
      {children}
    </HStack>
  )
}

export default NavStack