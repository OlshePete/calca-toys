'use client';

import { Card } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface ListItemWrapperProps {
  children: ReactNode;
  className?: string;
}

const ListItemWrapper: React.FC<ListItemWrapperProps> = ({ children, className = '' }) => {
  return (
    <Card
      className={`${className}`}
      display={'flex'}
      flexDirection={'column-reverse'}
      minW={'370px'}
      h={'441px'}
      position={'relative'}
      borderRadius={'14px'}
      overflow={'hidden'}
      transition={'all 0.3s ease'}
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
      sx={{
        h3: {
          color: 'white',
          fontFamily: 'TS Remarker',
          fontSize: '28px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '120%',
          textTransform: 'uppercase',
        },
        button: {
          backgroundColor: '#F49AA5',
          color: 'white',
          fontFamily: 'Lato',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '14px',
          padding: '17px 32px',
          borderRadius: '49px',
          border: 'none',
          cursor: 'pointer',
          textTransform: 'uppercase',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#e88994',
          },
        },
      }}
    >
      {children}
    </Card>
  );
};

export default ListItemWrapper;
