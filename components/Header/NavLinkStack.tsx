'use client'
import React from 'react'
import HeaderMenuPopover from '@/modules/popovers/HeaderMenuPopover';
import { IAllCategoryNames } from '@/types/api';
import { Box, Button, HStack, List, ListItem, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link';
import HeaderMenuButton from './HeaderMenuButton';
import { HeaderPopover } from './HeaderPopover';

interface INavLinkStackProps {
  categoryNames: IAllCategoryNames
}

function NavLinkStack({ categoryNames }: INavLinkStackProps) {

  return (
    <Box position={'relative'}
      height={'77px'}
      style={{
        display: useBreakpointValue({ base: 'none', lg: 'inherit' }),
        textTransform: 'uppercase',
        fontSize: '14px',
        fontWeight: 400,
        position: "relative"
      }}
    >
      <HStack
        as={List}
        gap={'44px'}
        height={'100%'}
        minHeight={'100%'}
      >
        <ListItem>
          <HeaderPopover label='шары'
            category="balloon"
          categoryNames={categoryNames}/>
          {/* <HeaderMenuButton
            key={'btn-header-baloon'}
            category="balloon"
          >
            шары
          </HeaderMenuButton> */}
        </ListItem>
        <ListItem>
          <HeaderPopover label='игрушки'
            category="toy"
          categoryNames={categoryNames}/>
          {/* <HeaderMenuButton
            key={'btn-header-toy'}
            category="toy"
          >
            игрушки
          </HeaderMenuButton> */}
        </ListItem>

        <Button
          variant={'header_link'}
          as={ListItem}

        >
          <Link href="/catalog/services/packing" style={{ textAlign: 'center' }} >
            упаковка
          </Link>
        </Button>
        <Button
            as={ListItem}

          variant={'header_link'}
        >
          <Link href="/catalog/supplies" style={{ textAlign: 'center' }}>
            товары для праздника
          </Link>
        </Button>
        <Link href="/contacts" style={{ textAlign: 'center' }} >
          <Button variant={'header_link'}
            as={ListItem}
          >
            контакты
          </Button>
        </Link>
      </HStack>
      <Box position={'absolute'} left={0} top={'48px'}>
        <HeaderMenuPopover
          categoryNames={categoryNames}
        />
      </Box>
    </Box>
  )
}

export default NavLinkStack;