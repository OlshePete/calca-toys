'use client'
import { ChildrenComponentProps } from '@/types'
import { Text } from '@chakra-ui/react'
import React from 'react'

function CustomText({children}:ChildrenComponentProps) {
  return (
    <Text>{children}</Text>
  )
}

export default CustomText