'use client'
import { CustomTitleProps } from '@/types'
import { Heading } from '@chakra-ui/react'
import React from 'react'

function CustomTitle({children,  ...props}:CustomTitleProps) {
  return (
    <Heading {...props}>{children}</Heading>
  )
}

export default CustomTitle