'use client';
import React, { useRef } from 'react';
import { IAllCategoryNames } from '@apptypes/api';
import HeaderMenuPopover from '@modules/popovers/HeaderMenuPopover';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { HeaderPopover } from './HeaderPopover';
import Button from '../../ui/Buttons/CustomButton';
import { CustomButtonProps } from '@apptypes';

interface INavLinkStackProps {
  categoryNames: IAllCategoryNames;
}

function NavLinkStack({ categoryNames }: INavLinkStackProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const buttonProps:CustomButtonProps = {
    asChild:true,
    visual:'header_link',
    width:'fit-content',
    height:'100%',
    display:'flex',
    alignItems:'center',
    _hover:{
      textDecoration: 'underline',
    },
    style:{ textAlign: 'center' },
  }
  return (
    <Box
      ref={containerRef}
      position={'relative'}
      height={'77px'}
      flexGrow={1}
      style={{
        alignItems:'center',
        justifyContent:'center',
        display: useBreakpointValue({ base: 'none', lg: 'flex' }),
        textTransform: 'uppercase',
        fontSize: '14px',
        fontWeight: 400,
        position: 'relative',
      }}
    >
      <Flex gap={'44px'} height={'100%'} minHeight={'100%'}
      >
        <HeaderPopover label="шары" category="balloon" categoryNames={categoryNames} container={containerRef}/>
        <HeaderPopover label="игрушки" category="toy" categoryNames={categoryNames} container={containerRef} />
        <Button {...buttonProps} >
          <Link href="/catalog/services/packing" >
            упаковка
          </Link>
        </Button>
        <Button {...buttonProps}>
          <Link href="/catalog/supplies" style={{ textAlign: 'center' }}>
            товары для праздника
          </Link>
        </Button>
        <Button {...buttonProps}>
          <Link href="/contacts" style={{ textAlign: 'center' }}>
              контакты
          </Link>
        </Button>
      </Flex>
      <Box position={'absolute'} left={0} top={'48px'}>
        <HeaderMenuPopover categoryNames={categoryNames} />
      </Box>
    </Box>
  );
}

export default NavLinkStack;
