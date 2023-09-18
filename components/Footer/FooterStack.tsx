'use client'
import { FooterStackProps } from '@/types'
import { Stack } from '@chakra-ui/react'
import React from 'react'

function FooterStack({children, variant, gap=44}:FooterStackProps) {
  return (
    <Stack direction={variant} gap={gap+'px'}>{children}</Stack>
  )
}

export default FooterStack