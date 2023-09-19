'use client'
import { CustomTitleProps } from '@/types'
import { Heading } from '@chakra-ui/react'
import React from 'react'

function CustomTitle({children, fontSize=70}:CustomTitleProps) {
  return (
    <Heading fontSize={fontSize+'px'} lineHeight={fontSize+'px'}>{children}</Heading>
  )
}

export default CustomTitle