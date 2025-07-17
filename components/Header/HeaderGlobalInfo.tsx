'use client';
import React, { useState } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import { IconButton, Text } from '@chakra-ui/react';
import { HeaderInfoProps } from '@/types';
import Image from 'next/image';

function HeaderGlobalInfo({ theme = 'light' }: HeaderInfoProps) {
  const [open, setOpen] = useState(true);

  return open ? (
    <ContentContainer>
      <div
        className="header-info"
        style={{
          backgroundColor: theme === 'dark' ? 'brand.900' : 'brand.800',
        }}
      >
        <Text>При заказе любой позиции на сайте, скидка на упаковку 5%</Text>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          variant={'ghost'}
          _hover={{
            bg: 'rgba(0,0,0,0)',
          }}
          icon={<Image src="/cross.svg" alt="close popup" width={18} height={18} priority />}
        />
      </div>
    </ContentContainer>
  ) : (
    <></>
  );
}

export default HeaderGlobalInfo;
