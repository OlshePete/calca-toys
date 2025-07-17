'use client';
import {
  Box,
  Button,
  CloseButton,
  Drawer,
  IconButton,
  // Image,
  // Link,
  List,
  Portal,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FC, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { usePathname } from 'next/navigation';
import { IAllCategoryNames } from '@apptypes/api';
import Heading from '../../ui/Heading/CustomHeading';
import CustomButton from '../../ui/Buttons/CustomButton';
import Image from 'next/image';
import Link from 'next/link';
interface IModileHeaderProps {
  // categoryNames: IAllCategoryNames;
}
const data = [
  {
    label: 'Главная',
    src: '/',
  },
  {
    label: 'Воздушные шары',
    src: '/catalog/balloon',
  },
  {
    label: 'Игрушки',
    src: '/catalog/toy',
  },
  {
    label: 'Товары для праздника',
    src: '/catalog/supplies',
  },
  {
    label: 'Услуги',
    src: '/catalog/services',
  },
  {
    label: 'Контакты',
    src: '/contacts',
  },
  {
    label: 'Корзина',
    src: '/basket',
  },
];
const MobileHeaderMenu: FC<IModileHeaderProps> = ({  }) => {
  const { open, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const containerRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const container = document.getElementsByTagName('main')[0]
    if (container) containerRef.current = container
  }, [])
  return (
    <Box position={'relative'} display={useBreakpointValue({ base: 'flex', lg: 'none' })}>
   <Drawer.Root   open={open} placement="end" onOpenChange={(e) => !e.open && onClose()}>
        <Drawer.Backdrop />
        <Drawer.Trigger asChild>
          <IconButton 
            cursor={'pointer'}
            onClick={onOpen}
            aria-label="menu icon"
            mr={'20px'}
            bg={'transparent'}
            transition={'transform .5s ease'}
            _hover={{ transform: 'scale(1.2)' }}
          >
           <Image src="menu.svg" alt="Basket icon" width={40} height={40} />
          </IconButton>
        </Drawer.Trigger>
        <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content  bg={'brand.900'}>
          <Drawer.Header my={24}>
            <Drawer.Title asChild>
              <Heading as="h1" visual="post_header" mb={6} fontSize={'40px'}>
                Calca toys
              </Heading>
            </Drawer.Title>
          </Drawer.Header>
            <Drawer.Body>
              <List.Root display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'24px'}>
              {data.map((el) => {
                const { label, src } = el;
                const disabled = pathname === src;
                return (
                  <List.Item
                    key={label}
                    asChild
                    onClick={onClose}
                    _hover={{
                      color: 'brand.500',
                    }}
                  >
                    <Link
                      href={src}
                      style={{
                        pointerEvents: disabled ? 'none' : 'inherit',
                        opacity: disabled ? 0.2 : 1,
                        color: 'brand.100',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        fontStyle: 'normal',
                        fontWeight: '400',
                      }}
                    >
                      {label}
                    </Link>
                  </List.Item>
                );
              })}
            </List.Root>
            </Drawer.Body>
            <Drawer.Footer>
              {/* { TODO footer} */}
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton cursor={'pointer'} size="sm" width={10}  height={10}/>
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
      </Drawer.Root> 
    </Box>
  );
};
export { MobileHeaderMenu };
