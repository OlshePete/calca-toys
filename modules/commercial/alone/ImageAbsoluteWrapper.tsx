'use client';
import { ChildrenComponentProps } from '@/types';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

function ImageAbsoluteWrapper({ children }: ChildrenComponentProps) {
  const right = useBreakpointValue(
    {
      base: '-220px',
      md: '40px',
      lg: '60px',
      xl: '130px',
    },
    {
      fallback: 'base',
    }
  );

  return (
    <Box
      right={right}
      style={{
        position: 'absolute',
        bottom: 0,
      }}
    >
      {children}
    </Box>
  );
}

export default ImageAbsoluteWrapper;
