'use client';
import { ICustomStackProps } from '@/types';
import { Stack, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

function CustomStack({
  children,
  variant,
  gap = 44,
  justify = 'flex-start',
  style = {},
  className = '',
}: ICustomStackProps) {
  // const display = useBreakpointValue(
  //   { base: "none", md: "flex" },
  //   {
  //     // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
  //     // (Defaults to 'base')
  //     fallback: "md",
  //   }
  // );
  return (
    <Stack direction={variant} gap={gap + 'px'} align={justify} style={style} className={className}>
      {children}
    </Stack>
  );
}

export default CustomStack;
