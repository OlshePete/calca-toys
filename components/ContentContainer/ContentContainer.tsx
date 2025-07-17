'use client';
import { ContentContainerProps } from '@apptypes';
import { Container, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

function ContentContainer({ children, ...props }: ContentContainerProps) {
  const fullWidth = useBreakpointValue<boolean>(
    {
      base: false,
      sm: true,
      md: true,
      lg: true,
      xl: false,
    },
    {
      fallback: 'base',
    }
  );
  return (
    <Container
      maxW={"1170px"}
      margin={"0 auto"}
      position={'relative'}
      overflow={'hidden'}
      padding={fullWidth ? '0 14px' : 0}
      {...props}
    >
      {children}
    </Container>
  );
}

export default ContentContainer;
