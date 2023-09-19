'use client'
import { CustomStackProps } from '@/types'
import { Stack } from '@chakra-ui/react'
import React from 'react'

function CustomStack({children, variant, gap=44, justify="flex-start"}:CustomStackProps) {
  return (
    <Stack direction={variant} gap={gap+'px'} align={justify}>{children}</Stack>
  )
}

export default CustomStack