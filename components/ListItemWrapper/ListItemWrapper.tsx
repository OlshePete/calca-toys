'use client';

import { Card } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface ListItemWrapperProps {
  children: ReactNode;
  className?: string;
}

const ListItemWrapper: React.FC<ListItemWrapperProps> = ({ children, className = '' }) => {
  return (
    <Card.Root
      minW={'370px'}
      h={'441px'}
      background={'transparent'}
      border={'none'}
    >
      <Card.Body
      padding={0}
      className={`card-special-content ${className}`}
      display={'flex'}
      flexDirection={'column-reverse'}
      position={'relative'}
      borderRadius={'14px'}
      overflow={'hidden'}
      transition={'all 0.3s ease'}
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
      >
        {children}
      </Card.Body>
    </Card.Root>
  );
};

export default ListItemWrapper;
