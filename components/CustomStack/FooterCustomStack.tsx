'use client';
import React from 'react';
import { IFooterCustomStackProps } from '@/types';
import { Stack, StackProps } from '@chakra-ui/react';

function FooterCustomStack({
  children,
  gap = 44,
  justify = 'flex-start',
  style = {},
  className = '',
  variant,
  ...other
}: IFooterCustomStackProps) {
  const variantStyles = (key: typeof variant): StackProps => {
    switch (key) {
      case 'links':
        return {
          display: { base: 'none', md: 'flex', lg: 'flex' },
        };
      case 'contacts':
        return {
          flexGrow: { base: 1, lg: 0 },
        };
      default:
        return {};
    }
  };
  return (
    <Stack
      gap={gap + 'px'}
      align={justify}
      style={style}
      className={className}
      {...variantStyles(variant)}
      {...other}
    >
      {children}
    </Stack>
  );
}

export default FooterCustomStack;
