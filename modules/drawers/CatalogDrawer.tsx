import { ChildrenComponentProps } from "@/types";
import { Box, Button, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, IconButton, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";

interface IProps extends ChildrenComponentProps {}

const CatalogDrawer: FC<IProps> = ({ children }) => {
    const btnRef = useRef<HTMLButtonElement>(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const withDrawer = useBreakpointValue({ base: true, sm: true, md: true, lg: false, xl: false }, { fallback: 'md' })
    console.log('withDrawer',withDrawer);
    
    useEffect(()=>{
        console.log('btnRef.current',btnRef.current);
        
    },[btnRef.current])
    if (withDrawer) return (
        <>
        <Button  onClick={onOpen} position={'absolute'}>
            параметры
        </Button>
        {/* <IconButton
            ref={btnRef}
            onClick={onOpen}
            aria-label='menu icon'
            mr={'20px'}
            bg={'transparent'}
            // transition={'transform .5s ease'}
            sx={{
                position:'sticky'
            }}
            _hover={{ transform: 'scale(1.2)' }}
            icon={
                <Image
                    src="/menu.svg"
                    alt="Basket icon"
                    width={40}
                    height={40}
                    priority
                />
            }
        /> */}
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent h={'100dvh'} overflowY={'auto'} p={"24px"} bg={'#FEF7E6'}>
                <DrawerCloseButton
                    w={'44px'}
                    h={'44px'}
                    sx={{
                        '& svg': {
                            width: '18px',
                            height: '18px',
                        }
                    }}
                />
                <Box minW={"266px"} pt={'44px'} display={'flex'} flexDir={'column'} gap={'40px'} onClick={(e)=>{
                    console.log('click',e.target)
                }}>
                    {children}
                </Box>
            </DrawerContent>
        </Drawer>
        </>
    )
    return (
        <Box minW={"266px"} marginRight={'34px'} display={'flex'} flexDir={'column'} gap={'40px'}>
            {children}
        </Box>
    );
}

export default CatalogDrawer;