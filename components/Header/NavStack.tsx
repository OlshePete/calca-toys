'use client';
import { ChildrenComponentProps } from '@apptypes';
import { HStack, IconButton, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface INavStackProps extends ChildrenComponentProps {}
function NavStack({ children }: INavStackProps) {
   const { push } = useRouter();

  return (
    <HStack
      gap={'44px'}
      style={{
        textTransform: 'uppercase',
        fontSize: '14px',
        fontWeight: 400,
      }}
    >
      {children}
      <IconButton
        display={useBreakpointValue({ base: 'none', lg: 'inherit' })}
        aria-label="basket icon"
        mr={'20px'}
        bg={'transparent'}
        cursor={'pointer'}
        onClick={()=>push('/basket')}
      >
        <Image src="/basket.svg" alt="Basket icon" width={40} height={40} priority />
      </IconButton>
    </HStack>
  );
}

export default NavStack;
