'use client'
import FooterNav from "@/components/Footer/FooterNav";
import { IAllCategoryNames } from "@/types/api";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, IconButton, Input, List, ListItem, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useRef } from "react";
interface IModileHeaderProps {
    categoryNames: IAllCategoryNames

}
const data = [
  {
    label:'Главная',
    src:'/',
  },
  {
    label:'Воздушные шары',
    src:'/catalog/balloon',
  },
  {
    label:'Игрушки',
    src:'/catalog/toy',
  },
  {
    label:'Товары для праздника',
    src:'/catalog/supplies',
  },
  {
    label:'Услуги',
    src:'/catalog/services',
  },
  {
    label:'Контакты',
    src:'/contacts',
  },
  {
    label:'Корзина',
    src:'/basket',
  }
]
const MobileHeaderMenu:FC<IModileHeaderProps> = ({categoryNames}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()
    return <Box
      display={useBreakpointValue({ base: 'flex', lg: 'none' })}
    >
      <IconButton
        onClick={onOpen}
        aria-label='menu icon'
        mr={'20px'}
        bg={'transparent'}
        transition={'transform .5s ease'}
        _hover={{transform:'scale(1.2)'}}
        icon={<Image
          src="/menu.svg"
          alt="Basket icon"
          width={40}
          height={40}
          priority
        />}
      />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
         <DrawerOverlay />
        <DrawerContent bg={'brand.400'}>
          <DrawerCloseButton w={'44px'} h={'44px'} 
            sx={{
              '& svg':{
                width:'18px',
                height:'18px',
              }
            }}
          />
          <DrawerHeader my={24}><Heading as="h1" variant="post_header" mb={6}>Calca toys</Heading></DrawerHeader>

          <DrawerBody>
            <List display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'24px'}>
              {
                data.map(((el)=>{
                  const {label,src} = el
                  const disabled = pathname === src
                  return <ListItem  key={label} as={Link} href={src} onClick={onClose} 
                  _hover={{
                    color: "brand.500",
                  }}
                  sx={{
                      pointerEvents:disabled?'none':'inherit',
                      opacity: disabled?.2:1,
                      color: 'brand.100',
                      fontSize:'14px',
                      textTransform:'uppercase',
                      fontStyle: "normal",
                      fontWeight: "400",
                    }}
                  >
                    {label}
                  </ListItem>
                }))
              }
             
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
            </Box>
}
export {MobileHeaderMenu}