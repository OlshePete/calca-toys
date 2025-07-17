'use client';
import { ICustomBoxProps } from '@/types';
import { Box } from '@chakra-ui/react';
import React from 'react';

function CustomBox({ children, ...props }: ICustomBoxProps) {
  return <Box {...props}>{children}</Box>;
}

export default CustomBox;
