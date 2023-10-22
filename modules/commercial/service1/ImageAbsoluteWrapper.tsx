'use client'
import { ChildrenComponentProps } from '@/types'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

function ImageAbsoluteWrapper({children}:ChildrenComponentProps) {
  const right = useBreakpointValue(
    {
      base: '0px',
      md: '40px',
      lg: '130px',
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'base',
    },
  )
  return (
    <Box
    right={right}
    style={{
          position:"absolute",
          bottom:0,
    }}
    >{children}</Box>
  )
}

export default ImageAbsoluteWrapper